import { supabase } from '../supabase';
import type { Review } from '../../types';

export async function createReview(reviewData: Partial<Review>) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([reviewData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getServiceReviews(serviceId: string) {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      booking:bookings(
        *,
        client:profiles(*)
      )
    `)
    .eq('booking.service_id', serviceId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}