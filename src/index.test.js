import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', ()=>{
  it('should say hello', (done)=>{ //when we call jsdom, there is an asychronize call, the test has to be aysnchronize using done.
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World");
      done();  //tell mocha the test is done, and run expect after test is done.
      window.close();
    });  //the second parameter can be an array of javascript files load with html
  });
});