"use server"

import { db } from "../_lib/prisma"

interface CreateBookingParams {
  date: Date
  serviceId: string
  userId: string
}

export const createBooking = async (params: CreateBookingParams) => {
  await db.booking.create({
    data: params,
  })
}
