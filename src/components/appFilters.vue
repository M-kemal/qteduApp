<template>
     <div class="Filters-Section lg:col-span-1">
        <div class="Filters-Icon FiltersTitle">
            <div class="relative">
            <p>
                <span class="flex text-gray-500">
                <img src="../assets/filter.svg" alt="filterIcon" class="mr-2">
                FILTERS
                </span>
            </p>
            <div class="lg:hidden absolute top-0 left-[95%]">
                <button @click="show = !show" class="group">
                <i >
                    <IconChevron class="h-8 w-8 dark:text-indigo-500 group-hover:transform group-hover:rotate-180 transition duration-300" />
                </i>
                </button>
            </div>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
            </div>
        </div>
        <div v-if="show" class="Filter-Courses-Btn flex flex-col gap-4 ">
            <button v-for="item in filters" :key="item" class="FiltersBtn px-2 py-4 border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 transform duration-100 ease-linear">
            <span class=" uppercase">{{ item.text }}</span>
            </button>
            <select name="languages" class="border-b-2 border-b-gray-300 p-1 outline-none cursor-pointer ">
            <option v-for="option in Languages.option" :key="option.id" :value="option.value">
                {{ option.title }}
            </option>
            </select>
            <select name="target" class="border-b-2 border-b-gray-300 p-1 outline-none cursor-pointer ">
            <option v-for="option in Target.option" :key="option.id" :value="option.value">
                {{ option.title }}
            </option>
            </select>
            <select name="location" class="border-b-2 border-b-gray-300 p-1 outline-none cursor-pointer ">
            <option v-for="country in countres" :key="country.id" :value="country">
                {{ country }}
            </option>
            </select>
            <button class="ResetBtn w-2/5 mx-auto px-4 py-2 rounded-3xl border border-indigo-900 text-indigo-900 hover:text-white hover:bg-indigo-900 dark:text-indigo-500 dark:border-indigo-500 group">
            <span class="flex items-center justify-center"> Reset <ResetIcon class="w-4 ml-auto group-hover:transform group-hover:rotate-180 transition duration-300"/> </span>
            </button>
        </div>
      </div>
</template>

<script>
import { ref, reactive } from 'vue';
import IconChevron from './icons/IconChevron.vue';
import ResetIcon from './icons/ResetIcon.vue';

export default {
components : {
IconChevron,
ResetIcon
},
setup() {
    const show = ref(true);
    const filters = reactive({ 
        button : {
            "1": {id:1, text: 'programs'},
            "2": {id:2, text: 'courses'},
            "3": {id:3, text: 'trainings'},
            "4": {id:4, text: 'online activities'},
            "5": {id:5, text: 'programs'},
            "6": {id:6, text: 'internship opportunities'},
            "7": {id:7, text: 'free'},
        }
    });
    const Languages = reactive({
        option: {
            '1': {
            id: '1',
            value: 'all',
            title: "Filter by Language",
            },
            '2': {
            id: '2',
            value: 'Czech',
            title: "Czech",
            },
            '3': {
            id: '3',
            value: 'English',
            title: "English",
            },
            '4': {
            id: '4',
            value: 'French',
            title: "French",
            },
            '5': {
            id: '5',
            value: 'German',
            title: "German",
            },
            '6': {
            id: '6',
            value: 'Hungarian',
            title: "Hungarian",
            },
            '7': {
            id: '7',
            value: 'Italian',
            title: "Italian",
            },
            '8': {
            id: '8',
            value: 'Romanian',
            title: "Romanian",
            },
            '9': {
            id: '9',
            value: 'Spanish',
            title: "Spanish",
            },
        }
    });
    const Target = reactive({
        option: {
            '1': {
            id: '1',
            value: 'all',
            title: "Filter by Target",
            },
            '2': {
            id: '2',
            value: 'BSc students',
            title: "BSc students",
            },
            '3': {
            id: '3',
            value: 'Entrepreneurs',
            title: "Entrepreneurs",
            },
            '4': {
            id: '4',
            value: 'Investors',
            title: "Investors",
            },
            '5': {
            id: '5',
            value: 'MSc students',
            title: "MSc students",
            },
            '6': {
            id: '6',
            value: 'Managers',
            title: "Managers",
            },
            '7': {
            id: '7',
            value: 'PhD students',
            title: "PhD students",
            },
            '8': {
            id: '8',
            value: 'Primary school students',
            title: "Primary school students",
            },
            '9': {
            id: '9',
            value: 'Primary school teachers',
            title: "Primary school teachers",
            },
            '10': {
            id: '10',
            value: 'Professionals',
            title: "Professionals",
            },
            '11': {
            id: '11',
            value: 'Secondary school students',
            title: "Secondary school students",
            },
            '12': {
            id: '12',
            value: 'Secondary school teachers',
            title: "Secondary school teachers",
            },
            '13': {
            id: '13',
            value: 'Technicians',
            title: "Technicians",
            },
        }
    });
    const countres = ref(
    {
        ALL: 'Filter by Location',
        AF: 'Afghanistan',
        AX: 'Aland Islands',
        AL: 'Albania',
        DZ: 'Algeria',
        AS: 'American Samoa',
        AD: 'Andorra',
        AO: 'Angola',
        AI: 'Anguilla',
        AQ: 'Antarctica',
        AG: 'Antigua And Barbuda',
        AR: 'Argentina',
        AM: 'Armenia',
        AW: 'Aruba',
        AU: 'Australia',
        AT: 'Austria',
        AZ: 'Azerbaijan',
        BS: 'Bahamas',
        BH: 'Bahrain',
        BD: 'Bangladesh',
        BB: 'Barbados',
        BY: 'Belarus',
        BE: 'Belgium',
        BZ: 'Belize',
        BJ: 'Benin',
        BM: 'Bermuda',
        BT: 'Bhutan',
        BO: 'Bolivia',
        BA: 'Bosnia And Herzegovina',
        BW: 'Botswana',
        BV: 'Bouvet Island',
        BR: 'Brazil',
        IO: 'British Indian Ocean Territory',
        BN: 'Brunei Darussalam',
        BG: 'Bulgaria',
        BF: 'Burkina Faso',
        BI: 'Burundi',
        KH: 'Cambodia',
        CM: 'Cameroon',
        CA: 'Canada',
        CV: 'Cape Verde',
        KY: 'Cayman Islands',
        CF: 'Central African Republic',
        TD: 'Chad',
        CL: 'Chile',
        CN: 'China',
        CX: 'Christmas Island',
        CC: 'Cocos (Keeling) Islands',
        CO: 'Colombia',
        KM: 'Comoros',
        CG: 'Congo',
        CD: 'Congo, Democratic Republic',
        CK: 'Cook Islands',
        CR: 'Costa Rica',
        CI: 'Cote D\'Ivoire',
        HR: 'Croatia',
        CU: 'Cuba',
        CY: 'Cyprus',
        CZ: 'Czech Republic',
        DK: 'Denmark',
        DJ: 'Djibouti',
        DM: 'Dominica',
        DO: 'Dominican Republic',
        EC: 'Ecuador',
        EG: 'Egypt',
        SV: 'El Salvador',
        GQ: 'Equatorial Guinea',
        ER: 'Eritrea',
        EE: 'Estonia',
        ET: 'Ethiopia',
        FK: 'Falkland Islands (Malvinas)',
        FO: 'Faroe Islands',
        FJ: 'Fiji',
        FI: 'Finland',
        FR: 'France',
        GF: 'French Guiana',
        PF: 'French Polynesia',
        TF: 'French Southern Territories',
        GA: 'Gabon',
        GM: 'Gambia',
        GE: 'Georgia',
        DE: 'Germany',
        GH: 'Ghana',
        GI: 'Gibraltar',
        GR: 'Greece',
        GL: 'Greenland',
        GD: 'Grenada',
        GP: 'Guadeloupe',
        GU: 'Guam',
        GT: 'Guatemala',
        GG: 'Guernsey',
        GN: 'Guinea',
        GW: 'Guinea-Bissau',
        GY: 'Guyana',
        HT: 'Haiti',
        HM: 'Heard Island & Mcdonald Islands',
        VA: 'Holy See (Vatican City State)',
        HN: 'Honduras',
        HK: 'Hong Kong',
        HU: 'Hungary',
        IS: 'Iceland',
        IN: 'India',
        ID: 'Indonesia',
        IR: 'Iran, Islamic Republic Of',
        IQ: 'Iraq',
        IE: 'Ireland',
        IM: 'Isle Of Man',
        IL: 'Israel',
        IT: 'Italy',
        JM: 'Jamaica',
        JP: 'Japan',
        JE: 'Jersey',
        JO: 'Jordan',
        KZ: 'Kazakhstan',
        KE: 'Kenya',
        KI: 'Kiribati',
        KR: 'Korea',
        KW: 'Kuwait',
        KG: 'Kyrgyzstan',
        LA: 'Lao People\'s Democratic Republic',
        LV: 'Latvia',
        LB: 'Lebanon',
        LS: 'Lesotho',
        LR: 'Liberia',
        LY: 'Libyan Arab Jamahiriya',
        LI: 'Liechtenstein',
        LT: 'Lithuania',
        LU: 'Luxembourg',
        MO: 'Macao',
        MK: 'Macedonia',
        MG: 'Madagascar',
        MW: 'Malawi',
        MY: 'Malaysia',
        MV: 'Maldives',
        ML: 'Mali',
        MT: 'Malta',
        MH: 'Marshall Islands',
        MQ: 'Martinique',
        MR: 'Mauritania',
        MU: 'Mauritius',
        YT: 'Mayotte',
        MX: 'Mexico',
        FM: 'Micronesia, Federated States Of',
        MD: 'Moldova',
        MC: 'Monaco',
        MN: 'Mongolia',
        ME: 'Montenegro',
        MS: 'Montserrat',
        MA: 'Morocco',
        MZ: 'Mozambique',
        MM: 'Myanmar',
        NA: 'Namibia',
        NR: 'Nauru',
        NP: 'Nepal',
        NL: 'Netherlands',
        AN: 'Netherlands Antilles',
        NC: 'New Caledonia',
        NZ: 'New Zealand',
        NI: 'Nicaragua',
        NE: 'Niger',
        NG: 'Nigeria',
        NU: 'Niue',
        NF: 'Norfolk Island',
        MP: 'Northern Mariana Islands',
        NO: 'Norway',
        OM: 'Oman',
        PK: 'Pakistan',
        PW: 'Palau',
        PS: 'Palestinian Territory, Occupied',
        PA: 'Panama',
        PG: 'Papua New Guinea',
        PY: 'Paraguay',
        PE: 'Peru',
        PH: 'Philippines',
        PN: 'Pitcairn',
        PL: 'Poland',
        PT: 'Portugal',
        PR: 'Puerto Rico',
        QA: 'Qatar',
        RE: 'Reunion',
        RO: 'Romania',
        RU: 'Russian Federation',
        RW: 'Rwanda',
        BL: 'Saint Barthelemy',
        SH: 'Saint Helena',
        KN: 'Saint Kitts And Nevis',
        LC: 'Saint Lucia',
        MF: 'Saint Martin',
        PM: 'Saint Pierre And Miquelon',
        VC: 'Saint Vincent And Grenadines',
        WS: 'Samoa',
        SM: 'San Marino',
        ST: 'Sao Tome And Principe',
        SA: 'Saudi Arabia',
        SN: 'Senegal',
        RS: 'Serbia',
        SC: 'Seychelles',
        SL: 'Sierra Leone',
        SG: 'Singapore',
        SK: 'Slovakia',
        SI: 'Slovenia',
        SB: 'Solomon Islands',
        SO: 'Somalia',
        ZA: 'South Africa',
        GS: 'South Georgia And Sandwich Isl.',
        ES: 'Spain',
        LK: 'Sri Lanka',
        SD: 'Sudan',
        SR: 'Suriname',
        SJ: 'Svalbard And Jan Mayen',
        SZ: 'Swaziland',
        SE: 'Sweden',
        CH: 'Switzerland',
        SY: 'Syrian Arab Republic',
        TW: 'Taiwan',
        TJ: 'Tajikistan',
        TZ: 'Tanzania',
        TH: 'Thailand',
        TL: 'Timor-Leste',
        TG: 'Togo',
        TK: 'Tokelau',
        TO: 'Tonga',
        TT: 'Trinidad And Tobago',
        TN: 'Tunisia',
        TR: 'Turkey',
        TM: 'Turkmenistan',
        TC: 'Turks And Caicos Islands',
        TV: 'Tuvalu',
        UG: 'Uganda',
        UA: 'Ukraine',
        AE: 'United Arab Emirates',
        GB: 'United Kingdom',
        US: 'United States',
        UM: 'United States Outlying Islands',
        UY: 'Uruguay',
        UZ: 'Uzbekistan',
        VU: 'Vanuatu',
        VE: 'Venezuela',
        VN: 'Viet Nam',
        VG: 'Virgin Islands, British',
        VI: 'Virgin Islands, U.S.',
        WF: 'Wallis And Futuna',
        EH: 'Western Sahara',
        YE: 'Yemen',
        ZM: 'Zambia',
        ZW: 'Zimbabwe'
    });

    return {
        show,
        filters : filters.button,
        Languages,
        Target,
        countres
        }
    }
}
</script>

<style>

</style>