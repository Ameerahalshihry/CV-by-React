// --------old way with React CDN only--------

// const container1= document.getElementById('root')
// const element = React.createElement("div",{
//     children:"Hello",

// })

// ReactDOM.render(element,container1)


// --------this way with JSX تحويل صيفه الى --------

const container1= document.getElementById('root')
const element = <>
<h1 >آميره الرياعي</h1>
<div className="container">
    <div className="center">
    <h2>نبذه تعريفيه</h2>
        اميره الرياعي مهتمة بآن اكون مطوره برامج واسعى لتطوير مهاراتي 
        اميره الرياعي مهتمة بآن اكون مطوره برامج واسعى لتطوير مهاراتي 
        اميره الرياعي مهتمة بآن اكون مطوره برامج واسعى لتطوير مهاراتي 

    </div>
    <div className="rightSide">
        <h2>الشهادات</h2>
        <p>شهادة بكالوريوس من جامعة الملك سعود</p>
        <h2>الخبرات</h2>
        <ul>
            <li>مهندس برمجيات</li>
            <li>معيده متعاونه</li>
        </ul>
        <h2>الدورات التدريبية</h2>
        <ul>
            <li> معسكر طويق JAVASCRIPT</li>
            <li>دوره من يوداسيتي React</li>
            <li>دوره من يوداسيتي FrontEnd</li>
        </ul>
    </div>
    <div className="leftSide">
        <h2>التواصل</h2>
        <p>0546904442</p>
        <p>amerahalshihry@gmail.com</p>
        <a href="https://github.com/Ameerahalshihry">GitHub</a>
        <h2>المهارات</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JS</li>
            <li>React</li>
        </ul>
</div>
</div>
</>

ReactDOM.render(element,container1)
