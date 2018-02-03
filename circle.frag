#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;
uniform vec2 u_mouse;

float circle(vec2 st, float para){
  float delta = para * 0.01;
  return 1.0 - smoothstep(para - delta, para + delta, dot(st, st) * 4.0);
}

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution;
  vec2 coord = st - u_mouse / u_resolution;
  vec3 color = vec3(circle(coord, 0.5));

  gl_FragColor = vec4(color, 1.0);
}
