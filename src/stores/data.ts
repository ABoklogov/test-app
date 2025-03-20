import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import type { IFormData } from '@/types/formData';

const optionsPersist = {
  persist: {
    storage: localStorage,
    pick: ['formData']
  }
};

export const useDataStore = defineStore('data', () => {
  const formData = reactive({
    name: '',
    date: '',
    phone: '',
    email: '',
  });

  const loading = ref(false);
  const error = ref('');

  function setLoading(payload: boolean) {
    loading.value = payload;
  }
  function setError(payload: string) {
    error.value = payload;
  }

  async function fetchData(data: IFormData) {
    setLoading(true);
    await (() => new Promise(resolve => setTimeout(() => resolve(true), 1000)))();
    setLoading(false);
  }

  return { fetchData, formData, error, loading }
},
optionsPersist
)
