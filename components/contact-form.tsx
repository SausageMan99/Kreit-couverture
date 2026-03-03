"use client"

import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

const serviceOptions = [
  "Entretien toiture (nettoyage, démoussage, hydrofuge)",
  "Travaux de couverture (rénovation, zinguerie)",
  "Travaux de façade (nettoyage, imperméabilisation, ravalement)",
  "Nettoyage extérieurs (allées, terrasses, dallage)",
  "Autre",
]

type Status = "idle" | "loading" | "success" | "error"

interface FormData {
  nom: string
  prenom: string
  telephone: string
  email: string
  service: string
  message: string
}

const INITIAL_FORM: FormData = {
  nom: "",
  prenom: "",
  telephone: "",
  email: "",
  service: "",
  message: "",
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [status, setStatus] = useState<Status>("idle")
  const [serverMessage, setServerMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setServerMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json() as { success: boolean; message: string }

      if (data.success) {
        setStatus("success")
        setServerMessage(data.message)
        setFormData(INITIAL_FORM)
      } else {
        setStatus("error")
        setServerMessage(data.message)
      }
    } catch {
      setStatus("error")
      setServerMessage("Une erreur réseau s'est produite. Veuillez réessayer ou appeler le 06 50 72 95 61.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <p className="text-xl font-bold text-[#0D0D0D]">Demande envoyée !</p>
        <p className="text-gray-500 max-w-sm">{serverMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-[#c70815] hover:underline"
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-[#0D0D0D] mb-2">Nom *</label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full bg-[#F8F6F3] border border-gray-200 rounded-xl px-4 py-3 text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c70815]/30 focus:border-[#c70815] transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-semibold text-[#0D0D0D] mb-2">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            value={formData.prenom}
            onChange={handleChange}
            className="w-full bg-[#F8F6F3] border border-gray-200 rounded-xl px-4 py-3 text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c70815]/30 focus:border-[#c70815] transition-colors"
            placeholder="Votre prénom"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telephone" className="block text-sm font-semibold text-[#0D0D0D] mb-2">Téléphone *</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            value={formData.telephone}
            onChange={handleChange}
            className="w-full bg-[#F8F6F3] border border-gray-200 rounded-xl px-4 py-3 text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c70815]/30 focus:border-[#c70815] transition-colors"
            placeholder="06 XX XX XX XX"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0D0D0D] mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#F8F6F3] border border-gray-200 rounded-xl px-4 py-3 text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c70815]/30 focus:border-[#c70815] transition-colors"
            placeholder="votre@email.fr"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-[#0D0D0D] mb-2">Type de prestation *</label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-[#F8F6F3] border border-gray-200 rounded-xl px-4 py-3 text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-[#c70815]/30 focus:border-[#c70815] transition-colors"
        >
          <option value="">Sélectionnez une prestation</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0D0D0D] mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#F8F6F3] border border-gray-200 rounded-xl px-4 py-3 text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c70815]/30 focus:border-[#c70815] resize-none transition-colors"
          placeholder="Décrivez votre projet ou demande..."
        />
      </div>

      {status === "error" && serverMessage && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {serverMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#c70815] hover:bg-[#a00610] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-full transition-colors text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer ma demande de devis →"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Devis gratuit · Réponse rapide · Aucun engagement
      </p>
    </form>
  )
}
