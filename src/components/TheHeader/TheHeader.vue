<template>
    <transition appear>
        <nav class="navbar navbar-light bg-light navbar-expand-lg">
            <a class="navbar-brand">
                <img src="../../assets/logo.png" width="30" height="30" />
                My-Shop
            </a>
            <button class="navbar-toggler" v-trigger-collapse="'collapse'">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="collapse" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/user">Boutique</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="admin">Admin</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    </transition>
</template>

<script>
    export default {
        directives: {
            triggerCollapse: {
                inserted(el, binding) {
                    window.addEventListener('click', () => {
                        nav.classList.remove('show');
                    })
                    const nav = document.querySelector(`#${ binding.value }`);
                    el.addEventListener('click', (e) => {
                        if (nav.classList.contains('show')) {
                            nav.classList.remove('show');
                        } else {
                            nav.classList.add('show');
                        }
                        e.stopPropagation();
                    });
                },
            }
        },
        props: {
        },
    };
</script>

<style scoped>
    .router-link-active {
        font-weight: bold;
    }
    a {
        cursor: pointer;
    }
    @keyframes fromtop {
        from {
            transform: translateY(-20px);
        }
        to {}
    }
    .v-enter-active {
        animation: fromtop 1s;
    }
</style>