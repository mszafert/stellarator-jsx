import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';

function handleButtonClick() {
    alert('button clicked');
}

class App extends Component {
    render() {
        return (
            <div>
                {/*
                    Component:
                        Button

                    Props:
                        type (possible values: primary - default / secondary / disabled)
                        loading (possible values: true / false)
                        onButtonClick (function)
                */}
                <Button onButtonClick={handleButtonClick}>Hello</Button>


                {/*
                    Component:
                        Text

                    Props:
                        heading (possible values: true / false - default)
                        size (possible values: small / medium - default / large)
                */}
                <Text>Consequat amet eu duis reprehenderit laborum id. Eiusmod commodo in laborum et aute nisi proident et non. Consequat commodo commodo enim eu. Ullamco mollit elit est ex eu amet dolor nostrud. Sint aliquip ad dolore pariatur deserunt ea eiusmod laborum proident proident velit excepteur. Magna et sint deserunt proident eiusmod enim consequat veniam velit. Officia ipsum dolor eiusmod duis Lorem amet proident eu excepteur mollit.</Text>


                {/*
                    Component:
                        Notification

                    Props:
                        type (possible values: success / danger / info - default)
                */}
                <Notification>Mollit anim commodo aliquip id.</Notification>


                {/*
                    Component:
                        Input

                    Props:
                        type (email / text - default / phone / textarea / password)
                        name (string)
                        placeholder (string)
                        label (string)
                        value (string)
                        size (possible values: small / medium - default / large)
                        error (string)
                        onInputChange (function)
                */}


                {/*
                    Component:
                        LoginForm

                    Contains:
                        Two input fields - email and password
                        Submit button

                    Expected behavior:
                        Login and password should be printed in the console on submit button click
                */}



                {/*
                    Component:
                        Form

                    Props:
                        config (array of objects) - required
                */}


            </div>
        );
    }
}

export default App;
