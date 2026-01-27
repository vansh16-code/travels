import { notFound } from "next/navigation"
import { getTourById, getAllTourIds } from "@/lib/tourData"
import TourDetailClient from "@/components/TourDetailClient"

export async function generateStaticParams() {
  const ids = getAllTourIds()
  return ids.map((id) => ({ id }))
}

export default async function TourDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const tour = getTourById(id)

  if (!tour) {
    notFound()
  }

  return <TourDetailClient tour={tour} />
}
