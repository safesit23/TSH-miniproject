<template>
  <v-content>
    <v-container style="background: white; height: 2000px">
      <v-row class="px-1">
        <v-col>
          <h1 class="text-center">{{musicalName}}</h1>
          <a href="https://genius.com/Pasek-and-paul-hey-good-lookin-annotated">เพลง</a>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col>
          <ul v-for="{actName,datails} in musicals" :key="actName">
            <li>{{actName}}</li>
            <ul v-for="{sceneId,scene,songs} in datails" :key="scene">
              <li>{{scene}}</li>
              <ul v-for="{id,songName,character} in songs" :key="id">
                <li>{{songName}}..................................................{{character}}</li>
              </ul>
            </ul>
          </ul>
        </v-col>
      </v-row>-->
      <v-row>
        <v-col>
          <ul v-for="{actName,datails} in musicals" :key="actName">
            <li>{{actName}}</li>
            <ul v-for="{id,scene,subscenes} in datails" :key="id">
              <li>Scene{{scene}}: </li>
              <v-for v-for="{name,songs} in subscenes" :key="name">
               <span>{{name}}</span>
                <ul>
                  <v-for v-for="{id, songName, character} in songs" :key="id">
                    <li>{{songName}}..................................................{{character}}</li>
                  </v-for>
                </ul>
              </v-for>
            </ul>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12">
          <p v-html="venue"></p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12">
        <div v-html="exampleTable"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import KingAndI from "../data/KingAndI.json"
import DreamBox from "../data/DreamBox.json"
export default {
  name: "Test",
  data: () => ({
    musicals: DreamBox,
    musicalName: "ซ้อน The Musical",
    venue: "",
    original: `
    เมืองไทยรัชดาลัยเธียเตอร์ เปิดดำเนินการเมื่อ พ.ศ. 2550 ตั้งอยู่บริเวณชั้น  4 และ 6 ศูนย์การค้าเอสพละนาด รัชดาภิเษก เป็นโรงละครสำหรับแสดงละครเวที มาตรฐานบรอดเวย์  สามารถรองรับงานละครเวที คอนเสิร์ต การแสดง การประชุม และกิจกรรมหลากหลายรูปแบบ ด้วยความจุถึง 1512 ที่นั่ง แต่สามารถให้ความรู้สึกใกล้ชิดระหว่างผู้ชมกับการแสดงบนเวที และสร้างความรู้สึกอลังการให้เกิดขึ้นในเวลาเดียวกัน และที่สำคัญยังสามารถมอบอรรถรสในการชมได้ครบทุกมิติไม่ว่าคุณจะนั่งอยู่ ณ ตำแหน่งใด

ในส่วนของการออกแบบโรงละครเมืองไทยรัชดาลัยเธียเตอร์ได้รับการออกแบบโดยผู้เชี่ยวชาญในศาสตร์ของโรงละครเวที โดยเฉพาะการตกแต่งภายในมีการนำความเป็นไทยมาผสมผสานเข้ากับการออกแบบสมัยใหม่ กลายเป็นรูปแบบร่วมสมัยที่มีความเรียบง่ายแต่หรูหราในแบบไทยๆ

พื้นที่ใช้สอยภายในรวมทั้งสิ้นประมาณ 6,500 ตร.ม. พื้นที่ทั้งหมดถูกแบ่งเป็น 2 ชั้น ส่วนแรกอยู่บริเวณชั้น 4 ภายในศูนย์การค้าเอสพละนาด ทำหน้าที่เสมือนโถงขนาดใหญ่ คอยต้อนรับผู้ชมที่มาจากศูนย์การค้า

ส่วนที่สอง ซึ่งมีพื้นที่แยกขาดออกจากศูนย์การค้า ตั้งอยู่บนชั้น 6  เหนืออาคารจอดรถ ส่วนนี้ประกอบไปด้วย Lobby (Pre-function),Theatre bar,  Auditorium โซนต่างๆ
    `,
    exampleTable:`
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
    `
  }),
  beforeMount () {
    this.venue = this.handleNewLine(this.original)
  },
  methods: {
    handleNewLine(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
  },
};
</script>

<style>
</style>