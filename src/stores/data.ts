import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import type { IFormData, IUser } from '@/types/formData';
import { v4 as uuidv4 } from 'uuid';

const optionsPersist = {
  persist: {
    storage: localStorage,
    pick: ['formData', 'users']
  }
};

export const useDataStore = defineStore('data', () => {
  const router = useRouter();
  const users = ref<IUser[]>([]);
  const formData = reactive<IFormData>({
    name: '',
    date: '',
    phone: '',
    email: '',
  });
  const loading = ref(false);

  function setLoading(payload: boolean) {
    loading.value = payload;
  }
  function setUsers(payload: IFormData) {
    const newUser: IUser = {
      ...payload,
      id: uuidv4()
    };
    users.value.push(newUser);
  }

  async function submitData(data: IFormData) {
    setLoading(true);
    await (() => new Promise(resolve => setTimeout(() => resolve(true), 1000)))();
    setLoading(false);

    setUsers(data);
    router.push({ name: 'data' });
  }

  return {
    submitData,
    formData,
    users,
    loading
  }
},
optionsPersist
)
