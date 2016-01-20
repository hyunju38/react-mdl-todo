React
=====

Why
---
시간이 흐르면서 변하는 data를 다루는 대규모 Application 제작에 대한 문제점 해소 목적.


Data 보여주기
-----------
React는 data가 변경될 때마다 최신 data를 보여준다.

mock DOM을 사용하기 때문에 DOM 조작을 가장 효율적으로 한다.

Component는 단순히 props와 state를 받아서 HTML로 rendering해주는 function이다.

HTML rendering에 JSX를 사용한다.

JSX는 단지 optional 이다.

JSX를 사용하지 않는다면 `createElement` method를 사용하는 방법이 있다.


JSX
---
JSX(HTML 문법과 비슷한 XML)로 작성된 것은 React에 의해 React method로 변경된다.

JavaScript code 보다 XML이 designer에게 더 친숙하다는 이점이 있다.

HTML Tags 변수는 lower-case, React Component 변수는 upper-case. (단순 code style)

JSX는 `React.createElement`와 같다.
```
React.createElement(Nav, {color: "blue"});  // <Nav color="blue" />;
```

Attribute의 값은 `{}`로 할당한다.

```
<Person name={window.isLoggedIn ? window.name : ''} />
```

Component의 props을 변경하면 예상치 못한 결과가 나올 수 있으므로 immutable로 생각하는 것이 좋다.

ES6와 비슷한 Spread attribute 지원 `{...props}`

`{}`표현은 XSS 공격을 방지하기 위해 입력값(특수문자 `&middot;`) 그대로 출력된다.

custom attribute는 `data-custom-attribute`와 같이 추가한다.


동적 UI
------
Event handler를 받는 attribute는 W3C spec을 준수.

Autobinding: callback을 작성할 때, `this` 값이 저절로 binding. ES6는 예외.
Event Delegation: Event handler는 각 node가 아니라 최상위의 event listener에 추가.

Component는 state가 변경되면, 새로운 state로 새로운 UI를 rendering 한다.

일반적으로 data가 변하면 `setState()`를 호출하고 component를 re-rendering 한다.

간단한 data는 props로 관리. 사용자 입력, 서버 요청, 시간 경과에 따른 응답이 필요한 data는 state

복잡하지 않게 가능한한 stateless로 만드는 편이 좋다.

Event handler에 의해 변경될 수도 있는 data는 state로 하는 편이 좋다.

연산한 data(Computed data)는 `render` method 안에서 처리해주면 되므로 state로 할 필요가 없다.

React Components는 state와 props를 단순히 rendering 하는 것이기 때문에 state로 할 필요가 없다.

props와 중복되는 data를 굳이 state로 할 필요는 없다. props 값을 추적하는 하는 것은 예외.


Multiple Components
-------------------

동기부여: 관심사 분리

Owner component는 다른 components를 소유하며, props를 setting 해준다.

```
<Parent><Child /></Parent>  // Owner component
```

Parent는 `this.props.children`으로 Child props에 접근할 수 있다.

Child Reconciliation은 새로운 render가 각각 실행되면서 React가 DOM을 업데이트 하는 과정을 말한다.

일반적으로 rendering 되는 순서에 따라 Child Reconciliation이 발생.

```
// 첫번째 render
<Card>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</Card>

// <p>Paragraph 1</p> 삭제 후 두번째 render
// 먼저 마지막 child인 <p>Paragraph 2</p>가 지워지고,
<Card>
  <p>Paragraph 1</p>
</Card>
// 첫번째 child의 text가 변경된다.
<Card>
  <p>Paragraph 2</p>
</Card>
```

만약 지워지는 child가 state를 갖고 있다면 숨겨버린다.
```
<Card>
  <p style={{display: 'none'}}>Paragraph 1</p>
  <p>Paragraph 2</p>
</Card>
```

child component가 동적인(순서가 뒤섞이거나, 새로이 추가) 경우에는 component에 `key`를 할당한다.

component rendering 시, identity와 state가 유지되어야 하는데 `key`는 identity의 역할을 한다.

`key`는 항상 component에 직접 주입해야 한다.

```
<ul>
    {this.props.results.map(function(result) {
        return <Child key={result.id} data={result} />;
    })}
</ul>
```

Data의 흐름은 Owner -> Owned Component로 흐른다. 때문에, data가 변하면 그 data를 사용하는 모든 곳에 반영이 된다.

만약, performance를 향상시키고 싶다면 shouldComponentUpdate를 override 하면 된다.


Component 재사용할 수 있게 잘 만들기
------------------------------
`React.PropTypes`로 Component data 유효성 검증하기: data를 좀 더 안전하게 관리

`getDefaultProps`로 Props 선언하기: props에 기본값을 주어 견고한 code 작성

`{...this.props}`로 props를 한 번에 전달할 수 있다.

별도의 Component가 공통 기능을 공유하길 원할때(cross-cutting concerns) `mixins`를 사용한다.

ES6로 작성하게 되면 `React.createClass`와 유사하나 다른 점이 있다.
- `getInitialState` -> `contructor` 에서 작성
- `propTypes`, `defaultProps` -> 생성자의 property로 작성
- method의 this가 instance에 자동으로 binding 되지 않으므로 `.bind(this)` 혹은 `=>`을 사용해야 한다.
- `mixins`은 지원하지 않는다.

만약 stateless component를 다룬다면 function으로 정의할 수 있다.

`.propTypes`, `.defaultProps`는 여전히 사용할 수 있으며, rendering 속도가 좀 더 빠르다.


Props 전달하기 BP
---------------
Attribute를 명시해서 props를 전달하는 일반적인 방법
```
<Component a={'test a'} b={'test b'} c={'test c'} />
```

JSX를 사용하면 destructuring assignment를 사용할 수 있다.
```
let { some, ...other } = this.props;
```


Forms
-----
Form Components(textbox, textarea, checkbox, radiobox, selectbox)에 `onChange`에 callback을 추가하여 value가 변경될 때마다 호출되는 상호작용하는 component를 만들 수 있다.

render method에서 value 값을 설정하면 변경할 수 없다. 대신에 onChange를 이용해서 수정 가능하게 만들 수 있다.

`defaultValue` 혹은 `defaultChecked`로 default값을 설정할 수 있다.

textarea의 값은 children에 작성하는 것이 아닌 value 속성에 작성한다. JavaScript로 변환 시 문제 때문.

select의 경우 option에 selected 속성을 주는 것이 아닌 select의 value 속성을 할당한다. React에서 조작을 쉽게 하기 위해서 이다.






























React 방식으로 생각하기
------------------

0. 사용할 Data(or Mock data)와 UI
1. `단일책임의 원칙(Single responsible principle)`을 적용하여 UI를 Component로 쪼개기: 계층 정리
2. React를 이용하여 static 형태로 만들기: Interactivity 부분은 많은 사고가 필요하기 때문에 나중으로 미룸
3. `DRY`을 적용하여 UI state를 최소한으로 정하기
4. UI state를 Component에 적용하기
5. 역 data flow 추가(동적 기능 추가)


Summary
-------

`render` method는 component의 핵심, Component의 data를 넣고 UI를 보여주는 역할.

data의 형태는 props, state 두 가지.

유연하게 설계되어 외부 plugin을 사용하기 쉽다.
