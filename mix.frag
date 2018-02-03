#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

vec3 colorA = vec3(0.5, 0.7, 0.9);
vec3 colorB = vec3(0.8, 0.9, 0.1);
void main(){
  vec3 color = vec3(0.0);
  float pct = abs(sin(u_time));
  color = mix(colorA, colorB, pct);
  gl_FragColor = vec4(color, 1.0);
}
