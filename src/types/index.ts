export interface Hospital {
  id: string;
  name: string;
  location: string;
  distance: string;
  specialties: string[];
  offers: string[];
  camps: MedicalCamp[];
}

export interface MedicalCamp {
  id: string;
  name: string;
  date: string;
  location: string;
  services: string[];
  slots: Slot[];
}

export interface Slot {
  id: string;
  time: string;
  available: boolean;
}

export interface BloodRequest {
  id: string;
  bloodType: string;
  urgency: 'Normal' | 'Urgent' | 'Emergency';
  location: string;
  status: 'Pending' | 'Processing' | 'Fulfilled';
  requestDate: string;
}

export interface Prescription {
  id: string;
  doctorName: string;
  hospitalName: string;
  date: string;
  medicines: Medicine[];
  instructions: string;
}

export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  deliveryStatus?: 'Ordered' | 'Processing' | 'Shipped' | 'Delivered';
}

export interface HealthcareScheme {
  id: string;
  name: string;
  category: 'Maternity' | 'Disability' | 'Insurance' | 'Senior Citizens' | 'Children' | 'General';
  description: string;
  eligibility: string;
  benefits: string[];
  applicationLink: string;
}

export interface User {
  id: string;
  name: string;
  location: string;
  bloodType?: string;
  prescriptions: Prescription[];
  bloodRequests: BloodRequest[];
  bookedCamps: string[];
}