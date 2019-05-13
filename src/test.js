import React from 'react'

const SvgComponent = props => (
  <svg
    id="SVG"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <circle
      id="actor_3"
      cx={50}
      cy={75}
      r={5}
      opacity={1}
      fill="rgba(242,162,12,1)"
      fillOpacity={1}
      stroke="rgba(166,3,17,1)"
      strokeWidth={1}
      strokeOpacity={1}
    />
    <circle
      id="actor_2"
      cx={50}
      cy={75}
      r={5}
      opacity={1}
      fill="rgba(242,162,12,1)"
      fillOpacity={1}
      stroke="rgba(166,3,17,1)"
      strokeWidth={1}
      strokeOpacity={1}
    />
    <circle
      id="actor_1"
      cx={19}
      cy={75}
      r={6}
      opacity={1}
      fill="rgba(242,162,12,1)"
      fillOpacity={1}
      stroke="rgba(28,7,9,1)"
      strokeWidth={3}
      strokeOpacity={1}
    />
    <script type="text/ecmascript">
      {
        '(function(){var actors={};actors.actor_1={node:document.getElementById("SVG").getElementById("actor_1"),type:"circle",cx:19,cy:75,dx:12,dy:32,opacity:1.00};actors.actor_2={node:document.getElementById("SVG-Circus-eee2e66e-823b-ae2d-bbfc-bd3a1d9e2202").getElementById("actor_2"),type:"circle",cx:50,cy:75,dx:10,dy:32,opacity:1};actors.actor_3={node:document.getElementById("SVG-Circus-eee2e66e-823b-ae2d-bbfc-bd3a1d9e2202").getElementById("actor_3"),type:"circle",cx:50,cy:75,dx:10,dy:32,opacity:1};var tricks={};tricks.trick_1=(function(_,t){t=(function(n){return.5>n?2*n*n:-1+(4-2*n)*n})(t)%1,t=t*4%1,t=0>t?1+t:t;var a=(_.node,-25*Math.cos(-90*Math.PI/180)),i=25*Math.sin(-90*Math.PI/180);a+=25*Math.cos((-90-360*t*1)*Math.PI/180),i-=25*Math.sin((-90-360*t*1)*Math.PI/180),_._tMatrix[4]+=a,_._tMatrix[5]+=i});tricks.trick_2=(function(t,i){i=(function(n){return.5>n?2*n*n:-1+(4-2*n)*n})(i)%1,i=0>i?1+i:i;var _=t.node;0.1>=i?_.setAttribute("opacity",i*(t.opacity/0.1)):i>=0.9?_.setAttribute("opacity",t.opacity-(i-0.9)*(t.opacity/(1-0.9))):_.setAttribute("opacity",t.opacity)});var scenarios={};scenarios.scenario_1={actors: ["actor_1","actor_2","actor_3"],tricks: [{trick: "trick_1",start:0,end:1}],startAfter:0,duration:6000,actorDelay:300,repeat:0,repeatDelay:1000};var _reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,fnTick=function(t){var r,a,i,e,n,o,s,c,m,f,d,k,w;for(c in actors)actors[c]._tMatrix=[1,0,0,1,0,0];for(s in scenarios)for(o=scenarios[s],m=t-o.startAfter,r=0,a=o.actors.length;a>r;r++){if(i=actors[o.actors[r]],i&&i.node&&i._tMatrix)for(f=0,m>=0&&(d=o.duration+o.repeatDelay,o.repeat>0&&m>d*o.repeat&&(f=1),f+=m%d/o.duration),e=0,n=o.tricks.length;n>e;e++)k=o.tricks[e],w=(f-k.start)*(1/(k.end-k.start)),tricks[k.trick]&&tricks[k.trick](i,Math.max(0,Math.min(1,w)));m-=o.actorDelay}for(c in actors)i=actors[c],i&&i.node&&i._tMatrix&&i.node.setAttribute("transform","matrix("+i._tMatrix.join()+")");_reqAnimFrame(fnTick)};_reqAnimFrame(fnTick);})()'
      }
    </script>
  </svg>
)

export default SvgComponent