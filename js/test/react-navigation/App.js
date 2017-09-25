/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    AppRegistry, Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import NavigatorWrappingScreen from './NavigatorWrappingScreen'
import ChatScreen from './ChatScreen'


const RNDemo = StackNavigator({
        //导航配置
        Home: {
            screen: NavigatorWrappingScreen,
            navigationOptions: {
                //title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。
                //headerTitle：设置导航栏标题，推荐用这个方法。
                headerTitle: '导航栏的使用',
                //header：可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了。
                // header:null,
                //headerBackTitle：(IOS)设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
                headerBackTitle: '返回',
                //headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。（上个页面的标题过长，导致显示不下，所以改成了短一些的。）
                headerTruncatedBackTitle: '返回',
                headerRight: <Text style={{color: 'white', paddingRight: 10}}>更多</Text>,
                headerLeft: <Text style={{color: 'white', paddingLeft: 10}}>退出</Text>,
                // headerStyle：设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
                headerStyle: {
                    backgroundColor: '#217621',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                // headerTitleStyle：设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
                headerTitleStyle: {
                    color: 'white',
                    alignSelf: 'center'
                },
                // headerBackTitleStyle：设置导航条返回文字样式。
                // headerTintColor：设置导航栏文字颜色。总感觉和上面重叠了。
                // headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
                // gesturesEnabled：是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
                gesturesEnabled: false
            }
        },
        Chat: {
            screen: ChatScreen
        }
    },
    //导航视觉效果
    {
        // mode：定义跳转风格。card：使用iOS和安卓默认的风格。modal：iOS独有的使屏幕从底部画出。类似iOS的present效果
        mode: 'modal',
        //headerMode：边缘滑动返回上级页面时动画效果。float：iOS默认的效果，可以看到一个明显的过渡动画。screen：滑动过程中，整个页面都会返回。none：没有动画。
        headerMode: 'none',
        //cardStyle：自定义设置跳转效果。
        // transitionConfig： 自定义设置滑动返回的配置。
        // onTransitionStart：当转换动画即将开始时被调用的功能。
        // onTransitionEnd：当转换动画完成，将被调用的功能。
        onTransitionStart: console.log('导航开始'),
        onTransitionEnd: console.log('导航结束'),
        //path：路由中设置的路径的覆盖映射配置。
        // path:path属性适用于其他app或浏览器使用url打开本app并进入指定页面。
        // path属性用于声明一个界面路径，例如：【/pages/Home】。
        // 此时我们可以在手机浏览器中输入：app名称://pages/Home来启动该App，并进入Home界面。

        // initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件。
        //initialRouteParams：初始路由的参数。
    })
;


AppRegistry.registerComponent('RNDemo', () => RNDemo);