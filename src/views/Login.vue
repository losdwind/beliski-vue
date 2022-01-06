<template>
  <n-form
    inline
    :label-width="180"
    :model="formValue"
    :rules="rules"
    :size="size"
    ref="formRef"
  >
    <n-form-item label="email" path="user.email">
      <n-input
        v-model:value="formValue.user.email"
        placeholder="eg. xxxx@somemail.com"
      />
    </n-form-item>
    <n-form-item label="password" path="user.password">
      <n-input
        placeholder="password shall be min 6 length"
        v-model:value="formValue.user.password"
      />
    </n-form-item>

    <n-form-item>
      <n-button @click="handleLoginClick" attr-type="button"
        >Log In with Email</n-button
      >
    </n-form-item>
  </n-form>

  <pre>
  {{ JSON.stringify(formValue, 0, 2) }}
  </pre>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import useLogin from "../composables/useLogin";
import uselogin from "../composables/useLogin";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const formRef = ref(null);
    const message = useMessage();
    const { error, login, isPending } = useLogin();
    const router = useRouter();

    return {
      formRef,
      size: ref("medium"),
      formValue: ref({
        user: {
          email: "",
          password: "",
        },
      }),
      rules: {
        user: {
          email: {
            required: true,
            message: "Please input a valid Email address",
            trigger: "blur",
          },
          password: {
            required: true,
            message: "Please input a valid password",
            trigger: ["input", "blur"],
          },
        },
      },
      async handleLoginClick(e) {
        e.preventDefault();

        const messageReactive = message.loading("Verifying", {
          duration: 0,
        });

        await login(formRef.value.email, formRef.value.password);
        if (!error) {
          message.success("Valid");
          router.push("/");
        } else {
          console.log(error);
          message.error("Invalid");
        }
        messageReactive.destroy();
      },
    };
  },
});
</script>
