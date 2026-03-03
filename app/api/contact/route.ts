import { NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s().+\-]{6,20}$/

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: "Requête invalide." }, { status: 400 })
  }

  const { nom, prenom, telephone, email, service, message } = body as Record<string, string>

  // Validation
  if (!nom?.trim() || nom.trim().length < 2) {
    return NextResponse.json({ success: false, message: "Veuillez saisir votre nom." }, { status: 400 })
  }
  if (!telephone?.trim() || !PHONE_REGEX.test(telephone)) {
    return NextResponse.json({ success: false, message: "Veuillez saisir un numéro de téléphone valide." }, { status: 400 })
  }
  if (!service?.trim()) {
    return NextResponse.json({ success: false, message: "Veuillez sélectionner une prestation." }, { status: 400 })
  }
  if (email && !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ success: false, message: "L'adresse email saisie n'est pas valide." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.RESEND_TO_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Kreit Couverture <noreply@resend.dev>"

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or RESEND_TO_EMAIL env vars")
    return NextResponse.json({ success: false, message: "Service temporairement indisponible. Appelez-nous au 06 50 72 95 61." }, { status: 503 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email || undefined,
    subject: `Nouvelle demande de devis — ${service}`,
    text: [
      `Nom : ${nom} ${prenom ?? ""}`,
      `Téléphone : ${telephone}`,
      `Email : ${email || "Non fourni"}`,
      `Prestation : ${service}`,
      `Message : ${message || "Aucun message"}`,
    ].join("\n"),
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi. Appelez-nous au 06 50 72 95 61." }, { status: 500 })
  }

  return NextResponse.json({ success: true, message: "Votre demande a bien été envoyée. Nous vous répondrons rapidement !" })
}
