import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: ["/", "/blog", "/libros", "/sobre-mi", "/contacto", "/libros/:id"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
