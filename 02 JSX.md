# JSX

* 使用JSX
```js
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}

export default App;
```

* 嵌套元素
```js
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
      );
   }
}

export default App;
```
* 注意return中间必须用一个容器包裹起来

* 属性
```js
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "somevalue">This is the content!!!</p>
         </div>
      );
   }
}

export default App;
```

* Javascript表达式
```js
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{1+1}</h1>
         </div>
      );
   }
}

export default App;
```
* 注意在JSX中不能使用if else，但是可以使用三元表达式
```js
import React from 'react';

class App extends React.Component {
   render() {

      var i = 1;

      return (
         <div>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}

export default App;
```

* 样式
```js
import React from 'react';

class App extends React.Component {
   render() {

      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      return (
         <div>
            <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}

export default App;
```
* 注意React会自动在number数值后面加上px；

* 注释
```js
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            {
              //End of the line Comment...
            }
            {/*Multi line comment...*/}
         </div>
      );
   }
}

export default App;
```
* 注释
```js
import React from 'react';

class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 100,
      color: 'blue'
    }
    return (
      <div>
        Hello world
        {
          //这是单行注释
          //这是单行注释
          //这是单行注释
        }
        {
          /*
            多行注释
            多行注释
            多行注释
          */
        }
      </div>
    );
  }
}

export default App;
```

* 命名约定
* 组件名字首字母大写
* 用className和htmlFor替换class和for
