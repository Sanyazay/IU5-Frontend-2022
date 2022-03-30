/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 */

 function customBind(f, context) {
    return function semi(...arguments1){
        return f.apply(context,arguments1);
    }
      
    
  }

module.exports = customBind;