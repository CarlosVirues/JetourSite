"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import {
  User, Phone, Mail, CreditCard, MapPin, ArrowRight,
  CheckCircle, AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { submitQuoteForm } from "@/app/actions/quote";

export default function QuoteForm({ currentModel = null, source = null }) {
  const [state, action, isPending] = useActionState(submitQuoteForm, {
    errors: {},
    message: "",
    success: false,
    values: {},
  });

  // 🔴 NUEVO: redirección real desde el cliente (refresca URL → GTM dispara)
  useEffect(() => {
    if (state?.success) {
      window.location.href = "/gracias#quote-form"; // o "/gracias"
    }
  }, [state?.success]);

  // ... resto de tu componente (sin cambios) ...
  // (tu JSX existente de campos, mensajes, etc.)
}
