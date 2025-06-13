<script setup lang="ts">
import { MenuListItem } from '@/types/MenuListItem.ts'
import { ref } from 'vue'

const selectIndex = ref<number>(0)
const menuList = ref<MenuListItem[]>([
  new MenuListItem({
    name: 'Projects',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }),
  new MenuListItem({
    name: 'Gallery',
    description: '  long description for the gallery section',
  }),
  new MenuListItem({
    name: 'Articles',
    description: 'Read the latest articles and news',
  }),
  new MenuListItem({
    name: 'LeeLab',
    description: 'Explore various experiments and prototypes',
  }),
])

//
function handleMenuClick(item: MenuListItem, index: number) {
  console.log(`Clicked on ${item.name}, index: ${index}`)
  selectIndex.value = index
}
</script>

<template>
  <div class="header p-2 pr-5 flex justify-between items-center">
    <div class="flex items-center gap-2">
      <div class="cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition">
        <UIcon name="line-md:close-to-menu-transition" class="size-5" />
      </div>
      <p class="font-extrabold">HELLOHELLO</p>
    </div>
    <div class="menu relative flex items-center gap-2">
      <div v-for="(item, index) in menuList" :key="index" class="flex p-2 relative">
        <p @click="handleMenuClick(item, index)" class="text-gray-600 cursor-pointer">
          {{ item.name }}
        </p>
      </div>
      <div
        :class="{
          'left-0 w-[75px] ': selectIndex === 0,
          'left-[80px] w-[68px]': selectIndex === 1,
          'left-[155px] w-[70px]': selectIndex === 2,
          'left-[235px] w-[65px]': selectIndex === 3,
        }"
        class="absolute bg-primary bottom-0 h-[2px] transition-[left, width] duration-200 ease-in-out rounded-lg"
      ></div>
    </div>
  </div>
  <!-- Description -->
  <div
    v-if="menuList[selectIndex]"
    class="description p-2s absolute top-[100px] right-[24px] w-[300px] text-gray-200 hover:text-gray-400 transition-colors duration-300"
  >
    <p class="text-end">{{ menuList[selectIndex].description }}</p>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
