export class MenuListItem {
  /**
   *
   * MenuListItem 類別
   * 用於定義菜單列表項目的結構和屬性。
   *
   *  */
  name: string
  icon?: string
  route?: string
  description?: string
  subItems?: MenuListItem[]

  /**
   *
   * 建構函式宣告、屬性初始化:實體會有哪些方法
   * 當使用 new MenuListItem({...}) 時，可以傳哪些參數進來。
   *
   * */

  constructor({
    // 傳進來的參數
    name,
    icon,
    route,
    description = '',
    subItems = [],
  }: {
    // 傳進來的參數的類型
    name: string
    icon?: string
    route?: string
    description?: string
    subItems?: MenuListItem[]
  }) {
    // 將參數值指定給類別屬性
    this.name = name
    this.icon = icon
    this.route = route
    this.description = description
    this.subItems = subItems
  }
}
