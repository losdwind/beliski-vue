<template>
  <n-form
    inline
    :label-width="180"
    :model="formValue"
    :rules="rules"
    :size="size"
    ref="formRef"
  >
    <n-form-item>
      <span>
        <n-image
          width="100"
          :src="url"
          fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </span>
      <span>
        <n-upload action="handleUploadImage" @before-upload="beforeUpload">
          <n-button> upload (.png)</n-button>
        </n-upload>
      </span>
    </n-form-item>
    <n-form-item label="Nickname" path="user.nickName">
      <n-input
        v-model:value="formValue.user.nickName"
        placeholder="give a wonderful nickname"
      />

    </n-form-item>
     <n-form-item label="email" path="user.email">
      <n-input
        v-model:value="formValue.user.email"
        placeholder="eg. xxxx@somemail.com"
      />
    </n-form-item>
    <n-form-item label="password" path="user.password">
      <n-input type="password"
        show-password-on="mousedown"
        placeholder="password shall be min 6 length"
        :minlength = 6
        v-model:value="formValue.user.password"
      />
    </n-form-item>

    <n-form-item>
      <n-button @click="handleCreateUser" attr-type="button"> Sign Up</n-button>
    </n-form-item>
  </n-form>

  <pre>
  {{ JSON.stringify(formValue, 0, 2) }}
  </pre>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage, FileInfo } from "naive-ui";

import {useLogup} from "../composables/useLogup"
import { useStorage } from "../composables/userStorage";
import { useCollection } from "../composables/userCollection";

export default defineComponent({
  setup() {
    const formRef = ref(null);
    const message = useMessage();
    const { filePath, url, uploadImage } = useStorage();
    const {error, logup, isPending} = userLogup();
    return {
      formRef,
      size: ref("medium"),
      formValue: ref({
        user: {
          name: "",
          age: "",
          displayName: "",
          profileImageUrl: "",
        },
        file: File(),
      }),
      rules: {
        user: {
          email: {
            required: true,
            message: "Please input an Email",
            trigger: "blur",
          },
          password: {
            required: true,
            message: "Please input a password",
            trigger: ["input", "blur"],
          },
          displayName: {
          required: true,
          message: "Please input a nick name",
          trigger: ["input"],
        },
        
        },

        
      },
      async handleCreateUser(e) {
        const res = await logup()

        formRef.value.validate((errors) => {
          if (!error.value) {
            message.success("Valid");
            router.push({name: "Login"})
          } else {
            console.log(error.message);
            message.error("Invalid");
          }
        });
      },
      async beforeUpload({ file:FileInfo, fileList:FileInfo[]}) {
        const types = ["image/png", "image/jpeg"];
        if (!types.includes(file.file.type)) {
          formRef.value.file = file.file;
          message.error("Only accept png and jpeg");
          return false;
        }
        return true;
      },
      async handleUplaodImage({ file, fileList }) {
        //   let selected = e.target.files[0]
        //   console.log(selected)
        //   if (selected)
        await uploadImage(formRef.value.file.file);
        if (error.value) {
            console.log(filePath)
            console.log(url)
        } else {
            console.log(error.value)
        }
      },
    };
  },
});
</script>
