//component that renders Tweet component (3 times)
const App=()=>
    <div>
        <Tweet
            name="Jane"
            username="ja"
            date={new Date().toDateString()}
            message="message1"
        />
        <Tweet
            name="B"
            username="mar"
            date={new Date().toDateString()}
            message="message2"
        />
        <Tweet
            name="Jill"
            username="jil"
            date={new Date().toDateString()}
            message="message3"
        />
    </div>
