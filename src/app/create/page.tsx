import CreateRecipeForm from "./create-recipe-form";

export const metadata = {
  title: "Create Recipe Post",
  description:
    "Create a new recipe post with title, image, description, and link.",
};

export default function CreateRecipePage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Create post</h1>
        <CreateRecipeForm />
      </div>
    </main>
  );
}
