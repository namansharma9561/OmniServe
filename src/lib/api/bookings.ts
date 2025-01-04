import { supabase } from '../supabase';
import type { Booking } from '../../types';

export async function createBooking(bookingData: Partial<Booking>) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([bookingData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      service:services(*),
      client:profiles(*)
    `)
    .order('scheduled_at', { ascending: true });

  if (error) throw error;
  return data;
}

export async function updateBookingStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}