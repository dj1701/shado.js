var shado=shado||{};!function(t){var e,r,a=0,o=0,n=0,c=(t,e,r)=>{if("[object Number]"!==Object.prototype.toString.call(t)&&"[object String]"!==Object.prototype.toString.call(t)||"[object Number]"!==Object.prototype.toString.call(e)&&"[object String]"!==Object.prototype.toString.call(e)||"[object Number]"!==Object.prototype.toString.call(r)&&"[object String]"!==Object.prototype.toString.call(r))throw new Error("Parameters are expecting type number or string")},g=(t,e,r)=>new Date(r,e-1,t),l=(t,e)=>e-t;t.date=t.date||{},t.date.createDate=((t,e)=>{if("[object String]"===Object.prototype.toString.call(t)){var r=t.match(/^(\d{2})[\/|-](\d{2})[\/-](\d{4})/);return e?new Date(r[3],r[1]-1,r[2]):new Date(r[3],r[2]-1,r[1])}return t}),t.date.setDates=((e,r,c)=>{((t,e)=>{var r="[object String]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t),a="[object String]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e);if(r||a)throw new Error("Parameters are expecting type string or date")})(e,r),o=t.date.createDate(e,c),n=t.date.createDate(r,c),a=l(o,n)}),t.date.setDatesByUnits=((t,e,r,d,i,b)=>{c(t,e,r),c(d,i,b),o=g(t,e,r),n=g(d,i,b),a=l(o,n)}),t.date.getYears=(t=>{var e=n.getFullYear()-o.getFullYear();return n.getDate()<o.getDate()||n.getMonth()<o.getMonth()?e-=1:e}),t.date.getMonths=(t=>{var e=12*(n.getFullYear()-o.getFullYear());return e+=n.getMonth()-o.getMonth(),n.getDate()<o.getDate()?e-=1:e}),t.date.getWeeks=(t=>(a/864e5+.5<<1>>1)/7|0),t.date.getDays=(t=>(a/864e5+.5<<1>>1)+(t?1:0)),t.date.getHours=(t=>24*(a/864e5|0)+(t?24:0)),t.date.getMinutes=(t=>60*(24*(a/864e5|0)+(t?24:0))),t.date.getSeconds=(t=>86400*((a/864e5+.5<<1>>1)+(t?1:0))),t.date.format=((e,r,a)=>{if("[object String]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e))throw new Error("Parameters expected should be of type string or date");var o=e;"[object String]"===Object.prototype.toString.call(e)&&(o=t.date.createDate(e,a));for(var n=(t=>{var e=new Array("January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),r=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sun","Mon","Tue","Wed","Thu","Fri","Sat"),a=t=>(t<0||t>9?"":"0")+t,o=t.getMonth()+1,n=t.getDate(),c=t.getDay();return{d:n,dd:a(n),M:a(o),MM:a(o),MMM:e[o+11],MMMM:e[o-1],yyyy:t.getFullYear().toString(),yy:t.getFullYear().toString().slice(2),OI:(n=n,g=n%10,1===g?n+"st":2===g?n+"nd":3===g?n+"rd":n+"th"),DDD:r[c+7],DDDD:r[c]}})(o),c=0,g="";c<r.length;){for(var l="",d=r[c];r[c]===d;){if((r[c]+r[c+1]).match(/OI/)){l="OI",c+=2;break}l+=r[c++]}null!=n[l]?(g+=n[l],l=""):g+=l}return g})}(shado),module.exports=shado;