import { Hospital, BloodRequest, Prescription, HealthcareScheme } from '../types';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'City General Hospital',
    location: 'Downtown',
    distance: '3.2 km',
    specialties: ['Cardiology', 'Neurology', 'Pediatrics'],
    offers: ['Free health checkup this week', '20% off on lab tests'],
    camps: [
      {
        id: 'camp1',
        name: 'Diabetes Awareness Camp',
        date: '2025-06-15',
        location: 'Community Hall, Downtown',
        services: ['Blood Sugar Test', 'Consultation', 'Medication'],
        slots: [
          { id: 's1', time: '09:00 AM', available: true },
          { id: 's2', time: '10:00 AM', available: true },
          { id: 's3', time: '11:00 AM', available: false },
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Rural Health Center',
    location: 'Greenfield',
    distance: '5.7 km',
    specialties: ['General Medicine', 'Gynecology', 'Dentistry'],
    offers: ['Free vaccination for children'],
    camps: [
      {
        id: 'camp2',
        name: 'Women\'s Health Camp',
        date: '2025-06-20',
        location: 'Rural Health Center, Greenfield',
        services: ['Gynecological Consultation', 'Mammography', 'Health Education'],
        slots: [
          { id: 's4', time: '09:00 AM', available: true },
          { id: 's5', time: '10:00 AM', available: true },
          { id: 's6', time: '11:00 AM', available: true },
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Modern Multispeciality Hospital',
    location: 'Westside',
    distance: '7.1 km',
    specialties: ['Orthopedics', 'Dermatology', 'Ophthalmology', 'ENT'],
    offers: ['10% discount on senior citizen health packages', 'Free eye checkup'],
    camps: [
      {
        id: 'camp3',
        name: 'Eye Care Camp',
        date: '2025-06-25',
        location: 'Community Center, Westside',
        services: ['Vision Test', 'Glaucoma Screening', 'Cataract Consultation'],
        slots: [
          { id: 's7', time: '09:00 AM', available: false },
          { id: 's8', time: '10:00 AM', available: true },
          { id: 's9', time: '11:00 AM', available: true },
        ]
      }
    ]
  }
];

export const bloodRequests: BloodRequest[] = [
  {
    id: 'br1',
    bloodType: 'O+',
    urgency: 'Urgent',
    location: 'City General Hospital',
    status: 'Processing',
    requestDate: '2025-06-10'
  },
  {
    id: 'br2',
    bloodType: 'AB-',
    urgency: 'Emergency',
    location: 'Rural Health Center',
    status: 'Pending',
    requestDate: '2025-06-12'
  }
];

export const prescriptions: Prescription[] = [
  {
    id: 'p1',
    doctorName: 'Dr. Sarah Johnson',
    hospitalName: 'City General Hospital',
    date: '2025-06-05',
    medicines: [
      {
        id: 'm1',
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice daily',
        duration: '7 days',
        deliveryStatus: 'Shipped'
      },
      {
        id: 'm2',
        name: 'Ibuprofen',
        dosage: '400mg',
        frequency: 'As needed for pain',
        duration: '5 days',
        deliveryStatus: 'Delivered'
      }
    ],
    instructions: 'Take with food. Complete the full course of antibiotics.'
  }
];

export const healthcareSchemes: HealthcareScheme[] = [
  {
    id: 'hs1',
    name: 'Maternity Benefit Program',
    category: 'Maternity',
    description: 'Financial assistance for pregnant women and lactating mothers.',
    eligibility: 'All pregnant women and lactating mothers, excluding those who are in regular employment with the Central or State Government or PSUs.',
    benefits: [
      'Cash incentive of ₹5,000 in three installments',
      'Support for safe delivery',
      'Counseling on nutrition and breastfeeding'
    ],
    applicationLink: 'https://example.gov/maternity'
  },
  {
    id: 'hs2',
    name: 'Health Insurance Scheme',
    category: 'Insurance',
    description: 'Comprehensive health insurance coverage for families below poverty line.',
    eligibility: 'Families with annual income less than ₹2.5 lakhs.',
    benefits: [
      'Coverage up to ₹5 lakhs per family per year',
      'Cashless treatment at empanelled hospitals',
      'Pre and post hospitalization expenses covered'
    ],
    applicationLink: 'https://example.gov/healthinsurance'
  },
  {
    id: 'hs3',
    name: 'Senior Citizen Health Support',
    category: 'Senior Citizens',
    description: 'Health support program for senior citizens providing subsidized healthcare services.',
    eligibility: 'Citizens above 60 years of age.',
    benefits: [
      'Free health checkups at government hospitals',
      'Subsidized medicines',
      'Priority treatment at hospitals'
    ],
    applicationLink: 'https://example.gov/seniorcitizen'
  },
  {
    id: 'hs4',
    name: 'Child Immunization Program',
    category: 'Children',
    description: 'Comprehensive immunization program for children to prevent vaccine-preventable diseases.',
    eligibility: 'All children under 5 years of age.',
    benefits: [
      'Free vaccines for preventable diseases',
      'Growth monitoring',
      'Nutrition counseling'
    ],
    applicationLink: 'https://example.gov/childimmunization'
  }
];