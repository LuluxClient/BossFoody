import { Suspense } from "react"

import { GenerateRecipe } from "@/components/generate-recipe"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecentRecipes } from "@/components/recent-recipes"
import { RecipesCounter } from "@/components/recipes-counter"

export default async function IndexPage() {
  return (
    <div className="container grid">
      <PageHeader>
        <RecipesCounter />
        <PageHeaderHeading>
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-violet-500 to-teal-300 bg-clip-text text-transparent">
            {" Boss Foody"}
          </span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          OpenAI generated Recipes for the best Cooks !
        </PageHeaderDescription>
      </PageHeader>
      <GenerateRecipe />
      <Suspense>
        <RecentRecipes />
      </Suspense>
    </div>
  )
}
