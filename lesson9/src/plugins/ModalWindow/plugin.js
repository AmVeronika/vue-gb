export default {
   install(Vue) {//установка опций
      if (this.installed) {//проверяем статус установки плагина
         return
      }

      this.installed = true

      // Vue.prototype.$modal-  объект $modal
      Vue.prototype.$modal = {//устанавливаем флаг prototype (любое имя, вроде как), который поможет избежать повторной установки плагина в дальнейшем
         // новый экземпляр Vue, который выступает в роли паттерна EventBus
         EventBus: new Vue(),

         show(name, settings) {
            // $emit -   сообщаем, что наступило событие show
            this.EventBus.$emit('show', { name, settings })
            // вместе с событием передаем параметры из аргументов функции
         },
         hide() {
            // сообщаем, что наступило событие hide
            this.EventBus.$emit('hide')
         }
      }
      // Для вызова этих методов надо будет воспользоваться: this.$modal.show(name, settings) или this.$modal.hide()

   }
}