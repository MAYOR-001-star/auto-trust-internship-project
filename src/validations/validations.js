import {z} from "zod";

export const bookingSchema = z.object({
    vehicle: z.string().min(1, "Vehicle is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    notes: z.string().optional(),
});
