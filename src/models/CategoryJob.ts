export interface CategoryJob {
    id: string
    type: string
    attributes: {
        title: string
        description_headline: string
        functions_headline: string
        functions: string
        benefits_headline: string
        benefits: string
        desirable_headline: string
        desirable: string
        remote: boolean
        remote_modality: string
        remote_zone: null
        country: string
        category_name: string
        perks: string[]
        min_salary: number
        max_salary: number
        modality: string
        seniority: string
        published_at: number
        company: {
            data: {
                id: string
                type: string
                attributes: {
                    name: string
                    description: string
                    long_description: string
                    projects: string
                    benefits: string
                    twitter: string
                    github: string
                    facebook: string
                    angellist: string
                    logo: {
                        url: string
                        thumb: {
                            url: string
                        }
                    }
                    country: string
                }
                relationships: unknown
            }
        }
    }
    links: {
        public_url: string
    }
}

const PERKS = [
    {
        id: 'accessible',
        type: 'perk',
        attributes: {
            name: 'Accesible',
            description:
                'ACME Inc ofrece espacios e infraestructura accesibles para personas con movilidad reducida.',
        },
    },
    {
        id: 'beverages_and_snacks',
        type: 'perk',
        attributes: {
            name: 'Bebidas y snacks',
            description:
                'ACME Inc ofrece algunas bebidas y snacks de libre disposición en la oficina.',
        },
    },
    {
        id: 'bicycle_parking',
        type: 'perk',
        attributes: {
            name: 'Estacionamiento de bicicletas',
            description: 'Hay un lugar privado para estacionar las bicicletas.',
        },
    },
    {
        id: 'childcare',
        type: 'perk',
        attributes: {
            name: 'Guardería para niños',
            description:
                'ACME Inc provee cuidado gratuito de niños durante toda la jornada de trabajo.',
        },
    },
    {
        id: 'commuting_buses',
        type: 'perk',
        attributes: {
            name: 'Buses de acercamiento',
            description:
                'ACME Inc provee transporte gratuito desde y hacia sus oficinas.',
        },
    },
    {
        id: 'commuting_stipend',
        type: 'perk',
        attributes: {
            name: 'Bono de transporte',
            description: 'ACME Inc entrega un monto para gastos de transporte.',
        },
    },
    {
        id: 'company_retreats',
        type: 'perk',
        attributes: {
            name: 'Viajes o retiros de empresa',
            description:
                'Actividades de integración del equipo fuera del espacio de trabajo.',
        },
    },
    {
        id: 'computer_provided',
        type: 'perk',
        attributes: {
            name: 'Computadora',
            description:
                'ACME Inc proporciona una computadora para tu trabajo.',
        },
    },
    {
        id: 'computer_repairs',
        type: 'perk',
        attributes: {
            name: 'Reparaciones para tu computadora',
            description:
                'ACME Inc cubre algunos gastos de reparaciones en caso de desperfectos.',
        },
    },
    {
        id: 'conference_stipend',
        type: 'perk',
        attributes: {
            name: 'Gastos de conferencias',
            description:
                'ACME Inc cubre algunos gastos de conferencias o seminarios relacionados con el puesto.',
        },
    },
    {
        id: 'dental_insurance',
        type: 'perk',
        attributes: {
            name: 'Seguro dental',
            description: 'ACME Inc paga o copaga un seguro dental.',
        },
    },
    {
        id: 'digital_library',
        type: 'perk',
        attributes: {
            name: 'Biblioteca digital',
            description: 'Acceso a libros y/o suscripciones digitales.',
        },
    },
    {
        id: 'education_stipend',
        type: 'perk',
        attributes: {
            name: 'Bono de educación',
            description:
                'ACME Inc cubre algunos gastos de educación relacionados con el puesto.',
        },
    },
    {
        id: 'equity_offered',
        type: 'perk',
        attributes: {
            name: 'Se ofrece equity en la empresa',
            description:
                'Este cargo incluye participación accionaria (stock options o similar) como parte de la compensación.',
        },
    },
    {
        id: 'fitness_subsidies',
        type: 'perk',
        attributes: {
            name: 'Programas de fitness',
            description:
                'ACME Inc ofrece o subsidia programas de fitness y/o deporte.',
        },
    },
    {
        id: 'flexible_hours',
        type: 'perk',
        attributes: {
            name: 'Horario flexible',
            description:
                'Entrada y salida flexibles, libertad para realizar trámites personales o familiares.',
        },
    },
    {
        id: 'free_car_parking',
        type: 'perk',
        attributes: {
            name: 'Estacionamiento gratis',
            description: 'ACME Inc ofrece estacionamiento de autos gratuito.',
        },
    },
    {
        id: 'health_coverage',
        type: 'perk',
        attributes: {
            name: 'Cobertura de salud',
            description:
                'ACME Inc paga o copaga cobertura de salud adicional a lo legal.',
        },
    },
    {
        id: 'informal_dresscode',
        type: 'perk',
        attributes: {
            name: 'Vestimenta informal',
            description: 'ACME Inc no exige ningún código de vestimenta.',
        },
    },
    {
        id: 'internal_talks',
        type: 'perk',
        attributes: {
            name: 'Espacios para charlas internas',
            description:
                'ACME Inc entrega espacio para realizar presentaciones o charlas en horarios de trabajo.',
        },
    },
    {
        id: 'library',
        type: 'perk',
        attributes: {
            name: 'Biblioteca física',
            description:
                'Acceso a biblioteca de libros en papel dentro de la oficina.',
        },
    },
    {
        id: 'life_insurance',
        type: 'perk',
        attributes: {
            name: 'Seguro de vida',
            description: 'ACME Inc paga un seguro de vida para sus empleados.',
        },
    },
    {
        id: 'meals_provided',
        type: 'perk',
        attributes: {
            name: 'Comidas gratuitas',
            description:
                'Almuerzos y/u otras comidas gratuitas dentro de las instalaciones.',
        },
    },
    {
        id: 'mobile_provided',
        type: 'perk',
        attributes: {
            name: 'Teléfono móvil',
            description:
                'ACME Inc proporciona un teléfono celular para uso laboral.',
        },
    },
    {
        id: 'outdoors',
        type: 'perk',
        attributes: {
            name: 'Áreas al aire libre',
            description:
                'Las oficinas poseen espacios abiertos (parques, terrazas, etc).',
        },
    },
    {
        id: 'paid_sick_days',
        type: 'perk',
        attributes: {
            name: 'Ausencia por enfermedad pagada',
            description:
                'Se ofrece cobertura por días no trabajados a causa de enfermedad (pueden aplicar límites).',
        },
    },
    {
        id: 'parental_leave_over_legal',
        type: 'perk',
        attributes: {
            name: 'Pre y postnatal adicionales a los legales',
            description:
                'ACME Inc entrega períodos de pre y/o postnatal pagados superiores al mínimo legal.',
        },
    },
    {
        id: 'performance_bonus',
        type: 'perk',
        attributes: {
            name: 'Bono por desempeño',
            description:
                'Existen pagos adicionales al sueldo especificado si se cumplen objetivos.',
        },
    },
    {
        id: 'personal_coaching',
        type: 'perk',
        attributes: {
            name: 'Coaching personal',
            description:
                'ACME Inc ofrece consejería personal para sus empleados.',
        },
    },
    {
        id: 'pet_friendly',
        type: 'perk',
        attributes: {
            name: 'Mascotas permitidas',
            description: 'Las mascotas son bienvenidas en la oficina.',
        },
    },
    {
        id: 'recreational_areas',
        type: 'perk',
        attributes: {
            name: 'Áreas recreativas',
            description: 'Espacio para juegos o deportes.',
        },
    },
    {
        id: 'relocation',
        type: 'perk',
        attributes: {
            name: 'Ayuda con la reubicación',
            description:
                'Si vives en otro país, ACME Inc te ayuda con la mudanza y trámites de visa de trabajo.',
        },
    },
    {
        id: 'remote_full',
        type: 'perk',
        attributes: {
            name: 'Trabajo 100% remoto',
            description:
                'El cargo puede ser desempeñado desde cualquier lugar del mundo.',
        },
    },
    {
        id: 'remote_partial',
        type: 'perk',
        attributes: {
            name: 'Teletrabajo opcional',
            description: 'Algunos días puedes trabajarlos desde tu casa.',
        },
    },
    {
        id: 'retirement_plan',
        type: 'perk',
        attributes: {
            name: 'Aporte a pensión',
            description:
                'La empresa contribuye con fondos para pensiones como 401(k) y otros.',
        },
    },
    {
        id: 'shopping_discounts',
        type: 'perk',
        attributes: {
            name: 'Descuentos en compras',
            description:
                'ACME Inc tiene convenios de descuentos con algunos comercios.',
        },
    },
    {
        id: 'speaker_travel',
        type: 'perk',
        attributes: {
            name: 'Cobertura de conferencista',
            description:
                'Si dictas una conferencia o charla, ACME Inc cubre tus gastos de viaje.',
        },
    },
    {
        id: 'time_for_side_projects',
        type: 'perk',
        attributes: {
            name: 'Tiempo para proyectos paralelos',
            description:
                'Es posible realizar side-projects en horario de trabajo.',
        },
    },
    {
        id: 'vacation_on_birthday',
        type: 'perk',
        attributes: {
            name: 'Día de cumpleaños libre',
            description:
                'El día de tu cumpleaños es canjeable por un día completo de vacaciones.',
        },
    },
    {
        id: 'vacation_over_legal',
        type: 'perk',
        attributes: {
            name: 'Vacaciones extra',
            description:
                'ACME Inc otorga vacaciones pagadas adicionales al mínimo legal.',
        },
    },
    {
        id: 'wellness',
        type: 'perk',
        attributes: {
            name: 'Programas de bienestar',
            description:
                'ACME Inc ofrece o subsidia programas de bienestar mental y/o físico.',
        },
    },
]

/* 

[
    {
      "id": "accessible",
      "type": "perk",
      "attributes": {
        "name": "Accesible",
        "description": "ACME Inc ofrece espacios e infraestructura accesibles para personas con movilidad reducida."
      }
    },
    {
      "id": "beverages_and_snacks",
      "type": "perk",
      "attributes": {
        "name": "Bebidas y snacks",
        "description": "ACME Inc ofrece algunas bebidas y snacks de libre disposición en la oficina."
      }
    },
    {
      "id": "bicycle_parking",
      "type": "perk",
      "attributes": {
        "name": "Estacionamiento de bicicletas",
        "description": "Hay un lugar privado para estacionar las bicicletas."
      }
    },
    {
      "id": "childcare",
      "type": "perk",
      "attributes": {
        "name": "Guardería para niños",
        "description": "ACME Inc provee cuidado gratuito de niños durante toda la jornada de trabajo."
      }
    },
    {
      "id": "commuting_buses",
      "type": "perk",
      "attributes": {
        "name": "Buses de acercamiento",
        "description": "ACME Inc provee transporte gratuito desde y hacia sus oficinas."
      }
    },
    {
      "id": "commuting_stipend",
      "type": "perk",
      "attributes": {
        "name": "Bono de transporte",
        "description": "ACME Inc entrega un monto para gastos de transporte."
      }
    },
    {
      "id": "company_retreats",
      "type": "perk",
      "attributes": {
        "name": "Viajes o retiros de empresa",
        "description": "Actividades de integración del equipo fuera del espacio de trabajo."
      }
    },
    {
      "id": "computer_provided",
      "type": "perk",
      "attributes": {
        "name": "Computadora",
        "description": "ACME Inc proporciona una computadora para tu trabajo."
      }
    },
    {
      "id": "computer_repairs",
      "type": "perk",
      "attributes": {
        "name": "Reparaciones para tu computadora",
        "description": "ACME Inc cubre algunos gastos de reparaciones en caso de desperfectos."
      }
    },
    {
      "id": "conference_stipend",
      "type": "perk",
      "attributes": {
        "name": "Gastos de conferencias",
        "description": "ACME Inc cubre algunos gastos de conferencias o seminarios relacionados con el puesto."
      }
    },
    {
      "id": "dental_insurance",
      "type": "perk",
      "attributes": {
        "name": "Seguro dental",
        "description": "ACME Inc paga o copaga un seguro dental."
      }
    },
    {
      "id": "digital_library",
      "type": "perk",
      "attributes": {
        "name": "Biblioteca digital",
        "description": "Acceso a libros y/o suscripciones digitales."
      }
    },
    {
      "id": "education_stipend",
      "type": "perk",
      "attributes": {
        "name": "Bono de educación",
        "description": "ACME Inc cubre algunos gastos de educación relacionados con el puesto."
      }
    },
    {
      "id": "equity_offered",
      "type": "perk",
      "attributes": {
        "name": "Se ofrece equity en la empresa",
        "description": "Este cargo incluye participación accionaria (stock options o similar) como parte de la compensación."
      }
    },
    {
      "id": "fitness_subsidies",
      "type": "perk",
      "attributes": {
        "name": "Programas de fitness",
        "description": "ACME Inc ofrece o subsidia programas de fitness y/o deporte."
      }
    },
    {
      "id": "flexible_hours",
      "type": "perk",
      "attributes": {
        "name": "Horario flexible",
        "description": "Entrada y salida flexibles, libertad para realizar trámites personales o familiares."
      }
    },
    {
      "id": "free_car_parking",
      "type": "perk",
      "attributes": {
        "name": "Estacionamiento gratis",
        "description": "ACME Inc ofrece estacionamiento de autos gratuito."
      }
    },
    {
      "id": "health_coverage",
      "type": "perk",
      "attributes": {
        "name": "Cobertura de salud",
        "description": "ACME Inc paga o copaga cobertura de salud adicional a lo legal."
      }
    },
    {
      "id": "informal_dresscode",
      "type": "perk",
      "attributes": {
        "name": "Vestimenta informal",
        "description": "ACME Inc no exige ningún código de vestimenta."
      }
    },
    {
      "id": "internal_talks",
      "type": "perk",
      "attributes": {
        "name": "Espacios para charlas internas",
        "description": "ACME Inc entrega espacio para realizar presentaciones o charlas en horarios de trabajo."
      }
    },
    {
      "id": "library",
      "type": "perk",
      "attributes": {
        "name": "Biblioteca física",
        "description": "Acceso a biblioteca de libros en papel dentro de la oficina."
      }
    },
    {
      "id": "life_insurance",
      "type": "perk",
      "attributes": {
        "name": "Seguro de vida",
        "description": "ACME Inc paga un seguro de vida para sus empleados."
      }
    },
    {
      "id": "meals_provided",
      "type": "perk",
      "attributes": {
        "name": "Comidas gratuitas",
        "description": "Almuerzos y/u otras comidas gratuitas dentro de las instalaciones."
      }
    },
    {
      "id": "mobile_provided",
      "type": "perk",
      "attributes": {
        "name": "Teléfono móvil",
        "description": "ACME Inc proporciona un teléfono celular para uso laboral."
      }
    },
    {
      "id": "outdoors",
      "type": "perk",
      "attributes": {
        "name": "Áreas al aire libre",
        "description": "Las oficinas poseen espacios abiertos (parques, terrazas, etc)."
      }
    },
    {
      "id": "paid_sick_days",
      "type": "perk",
      "attributes": {
        "name": "Ausencia por enfermedad pagada",
        "description": "Se ofrece cobertura por días no trabajados a causa de enfermedad (pueden aplicar límites)."
      }
    },
    {
      "id": "parental_leave_over_legal",
      "type": "perk",
      "attributes": {
        "name": "Pre y postnatal adicionales a los legales",
        "description": "ACME Inc entrega períodos de pre y/o postnatal pagados superiores al mínimo legal."
      }
    },
    {
      "id": "performance_bonus",
      "type": "perk",
      "attributes": {
        "name": "Bono por desempeño",
        "description": "Existen pagos adicionales al sueldo especificado si se cumplen objetivos."
      }
    },
    {
      "id": "personal_coaching",
      "type": "perk",
      "attributes": {
        "name": "Coaching personal",
        "description": "ACME Inc ofrece consejería personal para sus empleados."
      }
    },
    {
      "id": "pet_friendly",
      "type": "perk",
      "attributes": {
        "name": "Mascotas permitidas",
        "description": "Las mascotas son bienvenidas en la oficina."
      }
    },
    {
      "id": "recreational_areas",
      "type": "perk",
      "attributes": {
        "name": "Áreas recreativas",
        "description": "Espacio para juegos o deportes."
      }
    },
    {
      "id": "relocation",
      "type": "perk",
      "attributes": {
        "name": "Ayuda con la reubicación",
        "description": "Si vives en otro país, ACME Inc te ayuda con la mudanza y trámites de visa de trabajo."
      }
    },
    {
      "id": "remote_full",
      "type": "perk",
      "attributes": {
        "name": "Trabajo 100% remoto",
        "description": "El cargo puede ser desempeñado desde cualquier lugar del mundo."
      }
    },
    {
      "id": "remote_partial",
      "type": "perk",
      "attributes": {
        "name": "Teletrabajo opcional",
        "description": "Algunos días puedes trabajarlos desde tu casa."
      }
    },
    {
      "id": "retirement_plan",
      "type": "perk",
      "attributes": {
        "name": "Aporte a pensión",
        "description": "La empresa contribuye con fondos para pensiones como 401(k) y otros."
      }
    },
    {
      "id": "shopping_discounts",
      "type": "perk",
      "attributes": {
        "name": "Descuentos en compras",
        "description": "ACME Inc tiene convenios de descuentos con algunos comercios."
      }
    },
    {
      "id": "speaker_travel",
      "type": "perk",
      "attributes": {
        "name": "Cobertura de conferencista",
        "description": "Si dictas una conferencia o charla, ACME Inc cubre tus gastos de viaje."
      }
    },
    {
      "id": "time_for_side_projects",
      "type": "perk",
      "attributes": {
        "name": "Tiempo para proyectos paralelos",
        "description": "Es posible realizar side-projects en horario de trabajo."
      }
    },
    {
      "id": "vacation_on_birthday",
      "type": "perk",
      "attributes": {
        "name": "Día de cumpleaños libre",
        "description": "El día de tu cumpleaños es canjeable por un día completo de vacaciones."
      }
    },
    {
      "id": "vacation_over_legal",
      "type": "perk",
      "attributes": {
        "name": "Vacaciones extra",
        "description": "ACME Inc otorga vacaciones pagadas adicionales al mínimo legal."
      }
    },
    {
      "id": "wellness",
      "type": "perk",
      "attributes": {
        "name": "Programas de bienestar",
        "description": "ACME Inc ofrece o subsidia programas de bienestar mental y/o físico."
      }
    }
  ]

*/
