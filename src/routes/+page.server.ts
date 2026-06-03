import { TESTING_STRING } from "$env/static/private";
import type { Actions, PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = () => {
  console.log(TESTING_STRING);
  return { varTest: TESTING_STRING };
};

export const actions = {
  // test: async (event) => {
  //   console.log("ACTION TRIGGER");
  //   console.log(event);
  // },
  test: async ({ request }) => {
    const data = await request.formData();
    console.log("isi data dari request :", data);
    const text = data.get("testing");

    if (!text) {
      return fail(400, { text, missing: true });
    }
    return {
      success: true,
      msg: "Berhasil input data : " + text,
    };
  },
} satisfies Actions;
