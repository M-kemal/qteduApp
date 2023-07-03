import { ref, onMounted, onUnmounted, reactive } from 'vue';

export default function () {
    const isOpen = ref(true);
        const isScrolled = ref(false);
        const handleScroll = () => {
            isScrolled.value = window.scrollY > 0;
        };
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });
        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        const menuItems = reactive([
            {
                name: 'About',
                classes: 'mb-[5px]',
            },
            {
                name: 'News & Events',
                classes: 'mb-[5px]',
            },
            {
                name: 'WORK WITH COMMUNITY',
                classes: '',
                icon: 'work',
            },
            {
                name: 'RESOURCES FOR EVERYONE',
                classes: '',
                icon: 'resources',
            },
        ]);

        const miniMenu = ref(["About", " News & Events", "WORK WITH COMMUNITY", "RESOURCES FOR EVERYONE"])

        return {
            isOpen,
            isScrolled,
            handleScroll,
            onMounted,
            onUnmounted,
            miniMenu,
            menuItems
        }
}