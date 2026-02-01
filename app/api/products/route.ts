import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Forzar que esta ruta sea dinámica y no se intente pre-renderizar
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const runtime = 'nodejs'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        active: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    )
  }
}
