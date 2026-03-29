// src/types/booking.ts
export interface BookingFormData {
  appliance: string;
  model?: string;
  problems: string[];
  extraNote?: string;
  name: string;
  phone: string;
}
