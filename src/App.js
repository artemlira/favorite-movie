import { createGlobalStyle } from 'styled-components';
import Img1 from "../src/img/1.jpg";
import Img2 from "../src/img/2.jpg";
import Img3 from "../src/img/3.jpg";
import Img4 from "../src/img/4.jpg";
import Img5 from "../src/img/5.jpg";
import Img6 from "../src/img/6.jpg";
import ShowImg from "./ShowImg";


const GlobalStyle = createGlobalStyle`
   body{
      background-color:#ccc;
   }
   
   .App {
   font-family: sans-serif;
   text-align: left;
   display: grid;
   grid-template-columns: 3fr 1fr;
   }

   h2 {
   text-align: center;
   }

   .Img {
   width: 200px;
   height: 200px;
   }

   img {
   width: 100%;
   }
`;

function App() {
   return (
      <div className="App">
         <GlobalStyle />
         <div className="About">
            <h2>Игра престолов</h2>
            <p>
               <b>Создатель: </b>
               Дэвид Бениофф и Д.Б. Уайсс
            </p>
            <h3>Описание:</h3>
            <p>
               «Игра престолов» — это вечная история об испытаниях на прочность и
               надежде на лучшее, жажде власти и бескорыстии, насилии и искренней
               любви, дружбе и предательстве, интригах и честности, жестокости и
               милосердии... Удивительно проникновенная и совершенно не детская
               энциклопедия человеческой «грязи» и добродетели. Сюжет разворачивается
               на фоне политических интриг и гражданской войны, вызванных борьбой за
               власть знатных домов Вестероса. Роберт Баратеон, король объединенных
               семи королевств, просит помощи у старого друга и верного слуги Эддарда
               Старка, уговаривая его стать новой «десницей» короля. Старк
               подозревает, что его предшественник был убит, он пытается расследовать
               обстоятельства его гибели и защитить своего суверена. Между тем далеко
               от человеческой подлости и глупости пробуждается легендарная тьма,
               которая грозит гибелью всему живому. Между ней и миром людей стоит
               лишь стена да немногочисленное братство ночного дозора. «Игра
               престолов» является долгожданной экранизацией культового произведения
               мастера фэнтези «Песнь Льда и Огня». В январе 2007 года права на
               экранизацию книг приобрел кабельный канал HBO. Необычайно темная
               атмосфера картины, хитросплетение интриг и трагических событий
               привлекают зрителя даже больше чем экзотическая обстановка или магия.
               Элементы фэнтези-реальности воспринимаются скорее как дополнение к
               сюжету. Сериал приобрел необычайно широкий для HBO размах — съемки
               проходят в Северной Ирландии и на Мальте, были приглашены звезды
               первой величины Шон Бин и Лена Хиди, а бюджет проекта превысил бюджет
               самого дорогого проекта компании — сериала «Рим».
            </p>
            <strong>Сюжет</strong>
            <p>
               К концу подходит время благоденствия, и лето, длившееся несколько
               десятилетий, угасает. Вокруг средоточия власти Семи королевств,
               Железного трона, зреет заговор, и в это непростое время король решает
               искать поддержки у друга юности Эддарда Старка. В мире, где все — от
               короля до наемника — рвутся к власти, плетут интриги и готовы вонзить
               нож в спину, есть место и благородству, состраданию и любви. Между
               тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и
               лишь Стена защищает живых к югу от нее. Между древней ледяной Стеной и
               пламенем навсегда ушедших из мира драконов разворачивается «Игра
               престолов» — долгожданная экранизация культовой саги Джорджа Р. Р.
               Мартина «Песнь льда и пламени».
            </p>
         </div>
         <div className="Images">
            <ShowImg image={Img6} className="Img" />
            <ShowImg image={Img1} className="Img" />
            <ShowImg image={Img2} className="Img" />
            <ShowImg image={Img3} className="Img" />
            <ShowImg image={Img4} className="Img" />
            <ShowImg image={Img5} className="Img" />
         </div>
      </div>
   );
}

export default App;
