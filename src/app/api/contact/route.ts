import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email no es válido" },
        { status: 400 }
      );
    }

    const contacto = await db.contacto.create({
      data: {
        nombre: String(nombre),
        email: String(email),
        telefono: String(telefono || ""),
        mensaje: String(mensaje),
      },
    });

    return NextResponse.json(
      { success: true, data: contacto },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error guardando contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contactos = await db.contacto.findMany({
      orderBy: { fecha: "desc" },
    });
    return NextResponse.json({ data: contactos });
  } catch (error) {
    console.error("Error obteniendo contactos:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
