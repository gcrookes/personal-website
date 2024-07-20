export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (to.path === "/login") {
    return;
  }

  // Authenticate user on all other requests
  if (to.path.startsWith('/fitness') && !user.value) {
    return navigateTo("/login");
  }
});
