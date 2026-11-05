import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">¡Configuración Exitosa!</h1>
        <p className="text-muted-foreground">Probandos Poppins, Lucide y shadcn/ui</p>
        
        {/* Botón de prueba de shadcn */}
        <Button className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          Probar Botón
        </Button>
      </div>
    </main>
  )
}