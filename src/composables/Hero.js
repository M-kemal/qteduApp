import { ref } from 'vue';

export default function () {
    const heroSection = ref(
        {
            title : 'Programs, Courses and Trainings',
            subTitle : 'Higher Education',
            content : 'Our collection includes different types of education opportunities focused on Quantum Technology hosted by the education providers around Europe. They are targeting entrepreneurs, managers, investors, professionals, technicians and others and include programs, courses, modules, workshops, ect.'
        }
    )

    return {
        heroSection
    }
}