import { supabase } from '../supabase';
import type { Service, Category } from '../../types';

export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select(`
      *,
      provider:profiles(*),
      category:categories(*)
    `)
    .eq('is_active', true);

  if (error) throw error;
  return data;
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*');

  if (error) throw error;
  return data;
}

export async function createService(serviceData: Partial<Service>) {
  const { data, error } = await supabase
    .from('services')
    .insert([serviceData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateService(id: string, updates: Partial<Service>) {
  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}