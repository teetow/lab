const Template = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#00b3ff" fillRule="evenodd" viewBox="0 0 128 64" width="0" height="0">
        <defs>
          <path id="commat" d="M 6,0 L 2,0 L 2,1 L 1,1 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 3,6 L 3,1 L 5,1 L 5,2 L 4,2 L 4,4 L 7,4 L 7,1 L 6,1 L 6,0" />
          <path id="a" d="M 2,3 L 5,3 L 5,4 L 2,4 L 2,5 L 1,5 L 1,6 L 2,6 L 2,7 L 7,7 L 7,3 L 6,3 L 6,2 L 2,2 L 2,3 M 3,6 L 3,5 L 5,5 L 5,6 L 3,6" />
          <path id="b" d="M 6,7 L 1,7 L 1,1 L 3,1 L 3,3 L 6,3 L 6,4 L 7,4 L 7,6 L 6,6 L 6,7 M 3,4 L 3,6 L 5,6 L 5,4 L 3,4" />
          <path id="c" d="M 2,3 L 1,3 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 3,6 L 3,3 L 6,3 L 6,2 L 2,2 L 2,3" />
          <path id="d" d="M 2,3 L 5,3 L 5,1 L 7,1 L 7,7 L 2,7 L 2,6 L 1,6 L 1,4 L 2,4 L 2,3 M 3,4 L 3,6 L 5,6 L 5,4 L 3,4" />
          <path id="e" d="M 2,3 L 1,3 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 3,6 L 3,5 L 7,5 L 7,3 L 6,3 L 6,2 L 2,2 L 2,3 M 3,4 L 3,3 L 5,3 L 5,4 L 3,4" />
          <path id="f" d="M 3,2 L 4,2 L 4,1 L 7,1 L 7,2 L 5,2 L 5,3 L 7,3 L 7,4 L 5,4 L 5,7 L 3,7 L 3,4 L 2,4 L 2,3 L 3,3 L 3,2" />
          <path id="g" d="M 2,3 L 1,3 L 1,5 L 2,5 L 2,6 L 5,6 L 5,7 L 1,7 L 1,8 L 6,8 L 6,7 L 7,7 L 7,2 L 2,2 L 2,3 M 3,3 L 5,3 L 5,5 L 3,5 L 3,3" />
          <path id="h" d="M 3,7 L 1,7 L 1,1 L 3,1 L 3,3 L 6,3 L 6,4 L 7,4 L 7,7 L 5,7 L 5,4 L 3,4 L 3,7" />
          <path id="i" d="M 5,2 L 3,2 L 3,1 L 5,1 L 5,2 M 2,4 L 3,4 L 3,6 L 2,6 L 2,7 L 6,7 L 6,6 L 5,6 L 5,3 L 2,3 L 2,4" />
          <path id="j" d="M 7,2 L 5,2 L 5,1 L 7,1 L 7,2 M 5,7 L 2,7 L 2,8 L 6,8 L 6,7 L 7,7 L 7,3 L 5,3 L 5,7" />
          <path id="k" d="M 1,7 L 3,7 L 3,5 L 4,5 L 4,6 L 5,6 L 5,7 L 7,7 L 7,6 L 6,6 L 6,5 L 5,5 L 5,4 L 6,4 L 6,3 L 4,3 L 4,4 L 3,4 L 3,1 L 1,1 L 1,7" />
          <path id="l" d="M 3,2 L 2,2 L 2,1 L 5,1 L 5,6 L 6,6 L 6,7 L 2,7 L 2,6 L 3,6 L 3,2" />
          <path id="m" d="M 1,7 L 3,7 L 3,5 L 4,5 L 4,6 L 5,6 L 5,5 L 6,5 L 6,7 L 8,7 L 8,3 L 7,3 L 7,2 L 5,2 L 5,3 L 3,3 L 3,2 L 1,2 L 1,7" />
          <path id="n" d="M 3,7 L 1,7 L 1,2 L 6,2 L 6,3 L 7,3 L 7,7 L 5,7 L 5,3 L 3,3 L 3,7" />
          <path id="o" d="M 2,3 L 1,3 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 7,6 L 7,3 L 6,3 L 6,2 L 2,2 L 2,3 M 3,6 L 3,3 L 5,3 L 5,6 L 3,6" />
          <path id="p" d="M 3,8 L 1,8 L 1,2 L 6,2 L 6,3 L 7,3 L 7,5 L 6,5 L 6,6 L 3,6 L 3,8 M 3,3 L 3,5 L 5,5 L 5,3 L 3,3" />
          <path id="q" d="M 3,5 L 3,3 L 5,3 L 5,5 L 3,5 M 2,3 L 1,3 L 1,5 L 2,5 L 2,6 L 5,6 L 5,8 L 7,8 L 7,2 L 2,2 L 2,3" />
          <path id="r" d="M 3,7 L 1,7 L 1,2 L 6,2 L 6,3 L 7,3 L 7,4 L 5,4 L 5,3 L 3,3 L 3,7" />
          <path id="s" d="M 2,3 L 1,3 L 1,4 L 2,4 L 2,5 L 5,5 L 5,6 L 1,6 L 1,7 L 6,7 L 6,6 L 7,6 L 7,5 L 6,5 L 6,4 L 3,4 L 3,3 L 7,3 L 7,2 L 2,2 L 2,3" />
          <path id="t" d="M 1,2 L 3,2 L 3,1 L 5,1 L 5,2 L 7,2 L 7,3 L 5,3 L 5,6 L 7,6 L 7,7 L 4,7 L 4,6 L 3,6 L 3,3 L 1,3 L 1,2" />
          <path id="u" d="M 1,6 L 2,6 L 2,7 L 7,7 L 7,2 L 5,2 L 5,6 L 3,6 L 3,2 L 1,2 L 1,6" />
          <path id="v" d="M 2,5 L 1,5 L 1,2 L 3,2 L 3,5 L 5,5 L 5,2 L 7,2 L 7,5 L 6,5 L 6,6 L 5,6 L 5,7 L 3,7 L 3,6 L 2,6 L 2,5" />
          <path id="w" d="M 1,5 L 2,5 L 2,7 L 4,7 L 4,6 L 5,6 L 5,7 L 7,7 L 7,5 L 8,5 L 8,2 L 6,2 L 6,4 L 5,4 L 5,3 L 4,3 L 4,4 L 3,4 L 3,2 L 1,2 L 1,5" />
          <path id="x" d="M 1,3 L 2,3 L 2,4 L 3,4 L 3,5 L 2,5 L 2,6 L 1,6 L 1,7 L 3,7 L 3,6 L 5,6 L 5,7 L 7,7 L 7,6 L 6,6 L 6,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,2 L 5,2 L 5,3 L 3,3 L 3,2 L 1,2 L 1,3" />
          <path id="y" d="M 1,5 L 2,5 L 2,6 L 4,6 L 4,7 L 1,7 L 1,8 L 5,8 L 5,7 L 6,7 L 6,6 L 7,6 L 7,2 L 5,2 L 5,5 L 3,5 L 3,2 L 1,2 L 1,5" />
          <path id="z" d="M 1,2 L 1,3 L 4,3 L 4,4 L 3,4 L 3,5 L 2,5 L 2,6 L 1,6 L 1,7 L 7,7 L 7,6 L 4,6 L 4,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,2 L 1,2" />
          <path id="lsqb" d="M 2,0 L 2,7 L 6,7 L 6,6 L 4,6 L 4,1 L 6,1 L 6,0 L 2,0" />
          <path id="pound" d="M 4,1 L 3,1 L 3,2 L 2,2 L 2,3 L 1,3 L 1,4 L 2,4 L 2,5 L 1,5 L 1,6 L 0,6 L 0,7 L 6,7 L 6,6 L 3,6 L 3,5 L 4,5 L 4,4 L 6,4 L 6,3 L 4,3 L 4,1 M 4,0 L 4,1 L 6,1 L 6,0 L 4,0 M 6,1 L 6,2 L 7,2 L 7,1 L 6,1 M 6,6 L 7,6 L 7,5 L 6,5 L 6,6" />
          <path id="rsqb" d="M 2,0 L 2,1 L 4,1 L 4,6 L 2,6 L 2,7 L 6,7 L 6,0 L 2,0" />
          <path
            id="#x2B06" //uparrow
            d="M 3,1 L 3,2 L 2,2 L 2,3 L 1,3 L 1,4 L 3,4 L 3,8 L 5,8 L 5,4 L 7,4 L 7,3 L 6,3 L 6,2 L 5,2 L 5,1 L 3,1"
          />
          <path
            id="#x2B05" //leftarrow
            d="M 3,1 L 3,2 L 2,2 L 2,3 L 1,3 L 1,5 L 2,5 L 2,6 L 3,6 L 3,7 L 4,7 L 4,5 L 8,5 L 8,3 L 4,3 L 4,1 L 3,1"
          />
          <path id="%20" d="M 0,0 L 8,0 L 8,8 L 0,8 L 0,0" />
          <path id="excl" d="M 3,7 L 5,7 L 5,6 L 3,6 L 3,7 M 5,0 L 3,0 L 3,4 L 5,4 L 5,0" />
          <path id="quot" d="M 1,3 L 3,3 L 3,0 L 1,0 L 1,3 M 7,0 L 7,3 L 5,3 L 5,0 L 7,0" />
          <path id="num" d="M 0,2 L 1,2 L 1,0 L 3,0 L 3,2 L 5,2 L 5,0 L 7,0 L 7,2 L 8,2 L 8,3 L 7,3 L 7,4 L 8,4 L 8,5 L 7,5 L 7,7 L 5,7 L 5,5 L 3,5 L 3,7 L 1,7 L 1,5 L 0,5 L 0,4 L 1,4 L 1,3 L 0,3 L 0,2 M 3,3 L 3,4 L 5,4 L 5,3 L 3,3" />
          <path id="dollar" d="M 3,1 L 2,1 L 2,2 L 1,2 L 1,3 L 2,3 L 2,4 L 5,4 L 5,5 L 1,5 L 1,6 L 3,6 L 3,7 L 5,7 L 5,6 L 6,6 L 6,5 L 7,5 L 7,4 L 6,4 L 6,3 L 3,3 L 3,2 L 7,2 L 7,1 L 5,1 L 5,0 L 3,0 L 3,1" />
          <path id="percnt" d="M 3,2 L 1,2 L 1,0 L 3,0 L 3,2 M 6,1 L 5,1 L 5,2 L 4,2 L 4,3 L 3,3 L 3,4 L 2,4 L 2,5 L 1,5 L 1,7 L 2,7 L 2,6 L 3,6 L 3,5 L 4,5 L 4,4 L 5,4 L 5,3 L 6,3 L 6,2 L 7,2 L 7,0 L 6,0 L 6,1 M 7,7 L 5,7 L 5,5 L 7,5 L 7,7" />
          <path id="amp" d="M 2,1 L 1,1 L 1,2 L 2,2 L 2,4 L 1,4 L 1,6 L 2,6 L 2,7 L 8,7 L 8,6 L 7,6 L 7,5 L 8,5 L 8,4 L 5,4 L 5,3 L 6,3 L 6,2 L 7,2 L 7,1 L 6,1 L 6,0 L 2,0 L 2,1 M 5,4 L 5,6 L 3,6 L 3,4 L 5,4 M 3,2 L 3,1 L 5,1 L 5,2 L 3,2" />
          <path id="grave" d="M 4,1 L 5,1 L 5,0 L 7,0 L 7,1 L 6,1 L 6,2 L 5,2 L 5,3 L 3,3 L 3,2 L 4,2 L 4,1" />
          <path id="lpar" d="M 3,1 L 4,1 L 4,0 L 6,0 L 6,1 L 5,1 L 5,2 L 4,2 L 4,5 L 5,5 L 5,6 L 6,6 L 6,7 L 4,7 L 4,6 L 3,6 L 3,5 L 2,5 L 2,2 L 3,2 L 3,1" />
          <path id="rpar" d="M 2,1 L 2,0 L 4,0 L 4,1 L 5,1 L 5,2 L 6,2 L 6,5 L 5,5 L 5,6 L 4,6 L 4,7 L 2,7 L 2,6 L 3,6 L 3,5 L 4,5 L 4,2 L 3,2 L 3,1 L 2,1" />
          <path id="ast" d="M 1,1 L 1,2 L 2,2 L 2,3 L 0,3 L 0,4 L 2,4 L 2,5 L 1,5 L 1,6 L 3,6 L 3,5 L 5,5 L 5,6 L 7,6 L 7,5 L 6,5 L 6,4 L 8,4 L 8,3 L 6,3 L 6,2 L 7,2 L 7,1 L 5,1 L 5,2 L 3,2 L 3,1 L 1,1" />
          <path id="plus" d="M 3,1 L 3,3 L 1,3 L 1,4 L 3,4 L 3,6 L 5,6 L 5,4 L 7,4 L 7,3 L 5,3 L 5,1 L 3,1" />
          <path id="comma" d="M 3,5 L 3,7 L 2,7 L 2,8 L 4,8 L 4,7 L 5,7 L 5,5 L 3,5" />
          <path id="#x2D" d="M 1,3 L 1,4 L 7,4 L 7,3 L 1,3" />
          <path id="period" d="M 3,5 L 3,7 L 5,7 L 5,5 L 3,5" />
          <path id="sol" d="M 6,1 L 6,2 L 5,2 L 5,3 L 4,3 L 4,4 L 3,4 L 3,5 L 2,5 L 2,6 L 1,6 L 1,7 L 3,7 L 3,6 L 4,6 L 4,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,2 L 8,2 L 8,1 L 6,1" />
          <path id="0" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,1 M 3,1 L 3,3 L 4,3 L 4,4 L 3,4 L 3,6 L 5,6 L 5,3 L 4,3 L 4,2 L 5,2 L 5,1 L 3,1" />
          <path id="1" d="M 3,2 L 2,2 L 2,3 L 3,3 L 3,6 L 1,6 L 1,7 L 7,7 L 7,6 L 5,6 L 5,0 L 3,0 L 3,2" />
          <path id="2" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,3 L 6,3 L 6,4 L 4,4 L 4,3 L 5,3 L 5,1 L 3,1 L 3,2 L 1,2 L 1,1 M 2,4 L 4,4 L 4,5 L 3,5 L 3,6 L 7,6 L 7,7 L 1,7 L 1,5 L 2,5 L 2,4" />
          <path id="3" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,3 L 6,3 L 6,4 L 7,4 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,5 L 3,5 L 3,6 L 5,6 L 5,4 L 3,4 L 3,3 L 5,3 L 5,1 L 3,1 L 3,2 L 1,2 L 1,1" />
          <path id="4" d="M 5,1 L 4,1 L 4,2 L 3,2 L 3,3 L 1,3 L 1,5 L 5,5 L 5,7 L 7,7 L 7,5 L 8,5 L 8,4 L 7,4 L 7,0 L 5,0 L 5,1 M 3,3 L 5,3 L 5,4 L 3,4 L 3,3" />
          <path id="5" d="M 1,3 L 1,0 L 7,0 L 7,1 L 3,1 L 3,2 L 6,2 L 6,3 L 7,3 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,5 L 3,5 L 3,6 L 5,6 L 5,3 L 1,3" />
          <path id="6" d="M 2,1 L 1,1 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 7,6 L 7,4 L 6,4 L 6,3 L 3,3 L 3,1 L 5,1 L 5,2 L 7,2 L 7,1 L 6,1 L 6,0 L 2,0 L 2,1 M 3,4 L 5,4 L 5,6 L 3,6 L 3,4" />
          <path id="7" d="M 3,2 L 1,2 L 1,0 L 7,0 L 7,2 L 6,2 L 6,3 L 5,3 L 5,7 L 3,7 L 3,3 L 4,3 L 4,2 L 5,2 L 5,1 L 3,1 L 3,2" />
          <path id="8" d="M 2,1 L 1,1 L 1,3 L 2,3 L 2,4 L 1,4 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 7,6 L 7,4 L 6,4 L 6,3 L 7,3 L 7,1 L 6,1 L 6,0 L 2,0 L 2,1 M 3,1 L 5,1 L 5,3 L 3,3 L 3,1 M 3,4 L 5,4 L 5,6 L 3,6 L 3,4" />
          <path id="9" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,5 L 3,5 L 3,6 L 5,6 L 5,4 L 2,4 L 2,3 L 1,3 L 1,1 M 5,1 L 3,1 L 3,3 L 5,3 L 5,1" />
          <path id="colon" d="M 3,2 L 3,3 L 5,3 L 5,2 L 3,2 M 3,5 L 3,6 L 5,6 L 5,5 L 3,5" />
          <path id="semi" d="M 2,7 L 4,7 L 4,8 L 2,8 L 2,7 M 3,7 L 3,5 L 5,5 L 5,7 L 3,7 M 3,2 L 3,3 L 5,3 L 5,2 L 3,2" />
          <path id="lt" d="M 4,0 L 4,1 L 3,1 L 3,2 L 2,2 L 2,3 L 1,3 L 1,4 L 2,4 L 2,5 L 3,5 L 3,6 L 4,6 L 4,7 L 7,7 L 7,6 L 5,6 L 5,5 L 4,5 L 4,4 L 3,4 L 3,3 L 4,3 L 4,2 L 5,2 L 5,1 L 7,1 L 7,0 L 4,0" />
          <path id="equals" d="M 1,2 L 1,3 L 7,3 L 7,2 L 1,2 M 1,4 L 1,5 L 7,5 L 7,4 L 1,4" />
          <path id="gt" d="M 1,0 L 1,1 L 3,1 L 3,2 L 4,2 L 4,3 L 5,3 L 5,4 L 4,4 L 4,5 L 3,5 L 3,6 L 1,6 L 1,7 L 4,7 L 4,6 L 5,6 L 5,5 L 6,5 L 6,4 L 7,4 L 7,3 L 6,3 L 6,2 L 5,2 L 5,1 L 4,1 L 4,0 L 1,0" />
          <path id="quest" d="M 2,0 L 2,1 L 1,1 L 1,2 L 3,2 L 3,1 L 5,1 L 5,3 L 4,3 L 4,4 L 3,4 L 3,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,1 L 6,1 L 6,0 L 2,0 M 3,6 L 3,7 L 5,7 L 5,6 L 3,6" />
          <path id="emdash" d="M 8,3 L 8,5 L 0,5 L 0,3 L 8,3" />
          <path id="A" d="M 3,1 L 2,1 L 2,2 L 1,2 L 1,7 L 3,7 L 3,4 L 5,4 L 5,7 L 7,7 L 7,2 L 6,2 L 6,1 L 5,1 L 5,0 L 3,0 L 3,1 M 3,3 L 3,2 L 5,2 L 5,3 L 3,3" />
          <path id="B" d="M 6,7 L 1,7 L 1,0 L 6,0 L 6,1 L 7,1 L 7,3 L 6,3 L 6,4 L 7,4 L 7,6 L 6,6 L 6,7 M 5,1 L 3,1 L 3,3 L 5,3 L 5,1 M 5,4 L 3,4 L 3,6 L 5,6 L 5,4" />
          <path id="C" d="M 2,1 L 1,1 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 7,6 L 7,5 L 5,5 L 5,6 L 3,6 L 3,1 L 5,1 L 5,2 L 7,2 L 7,1 L 6,1 L 6,0 L 2,0 L 2,1" />
          <path id="D" d="M 5,6 L 5,7 L 1,7 L 1,0 L 5,0 L 5,1 L 6,1 L 6,2 L 7,2 L 7,5 L 6,5 L 6,6 L 5,6 M 3,1 L 3,6 L 4,6 L 4,5 L 5,5 L 5,2 L 4,2 L 4,1 L 3,1" />
          <path id="E" d="M 1,7 L 1,0 L 7,0 L 7,1 L 3,1 L 3,3 L 5,3 L 5,4 L 3,4 L 3,6 L 7,6 L 7,7 L 1,7" />
          <path id="F" d="M 3,7 L 3,4 L 5,4 L 5,3 L 3,3 L 3,1 L 7,1 L 7,0 L 1,0 L 1,7 L 3,7" />
          <path id="G" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,2 L 5,2 L 5,1 L 3,1 L 3,6 L 5,6 L 5,4 L 4,4 L 4,3 L 7,3 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,1" />
          <path id="H" d="M 3,7 L 3,4 L 5,4 L 5,7 L 7,7 L 7,0 L 5,0 L 5,3 L 3,3 L 3,0 L 1,0 L 1,7 L 3,7" />
          <path id="I" d="M 3,1 L 2,1 L 2,0 L 6,0 L 6,1 L 5,1 L 5,6 L 6,6 L 6,7 L 2,7 L 2,6 L 3,6 L 3,1" />
          <path id="J" d="M 3,1 L 4,1 L 4,6 L 3,6 L 3,5 L 1,5 L 1,6 L 2,6 L 2,7 L 5,7 L 5,6 L 6,6 L 6,1 L 7,1 L 7,0 L 3,0 L 3,1" />
          <path id="K" d="M 3,0 L 3,1 L 3,2 L 4,2 L 4,1 L 5,1 L 5,0 L 7,0 L 7,1 L 6,1 L 6,2 L 5,2 L 5,3 L 4,3 L 4,4 L 5,4 L 5,5 L 6,5 L 6,6 L 7,6 L 7,7 L 5,7 L 5,6 L 4,6 L 4,5 L 3,5 L 3,6 L 3,7 L 1,7 L 1,0 L 3,0" />
          <path id="L" d="M 7,7 L 1,7 L 1,0 L 3,0 L 3,6 L 7,6 L 7,7" />
          <path id="M" d="M 1,7 L 3,7 L 3,3 L 4,3 L 4,4 L 5,4 L 5,3 L 6,3 L 6,7 L 8,7 L 8,0 L 6,0 L 6,1 L 5,1 L 5,2 L 4,2 L 4,1 L 3,1 L 3,0 L 1,0 L 1,7" />
          <path id="N" d="M 3,7 L 1,7 L 1,0 L 3,0 L 3,1 L 4,1 L 4,2 L 5,2 L 5,0 L 7,0 L 7,7 L 5,7 L 5,5 L 4,5 L 4,4 L 3,4 L 3,7" />
          <path id="O" d="M 2,1 L 1,1 L 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 7,6 L 7,1 L 6,1 L 6,0 L 2,0 L 2,1 M 3,6 L 3,1 L 5,1 L 5,6 L 3,6" />
          <path id="P" d="M 3,7 L 3,4 L 6,4 L 6,3 L 7,3 L 7,1 L 6,1 L 6,0 L 1,0 L 1,7 L 3,7 M 3,3 L 3,1 L 5,1 L 5,3 L 3,3" />
          <path id="Q" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,5 L 6,5 L 6,6 L 7,6 L 7,7 L 4,7 L 4,6 L 2,6 L 2,5 L 1,5 L 1,1 M 5,1 L 3,1 L 3,5 L 5,5 L 5,1" />
          <path id="R" d="M 1,0 L 1,7 L 3,7 L 3,5 L 4,5 L 4,6 L 5,6 L 5,7 L 7,7 L 7,6 L 6,6 L 6,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,1 L 6,1 L 6,0 L 1,0 M 3,3 L 3,1 L 5,1 L 5,3 L 3,3" />
          <path id="S" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,2 L 5,2 L 5,1 L 3,1 L 3,3 L 6,3 L 6,4 L 7,4 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,5 L 3,5 L 3,6 L 5,6 L 5,4 L 2,4 L 2,3 L 1,3 L 1,1" />
          <path id="T" d="M 1,0 L 1,1 L 3,1 L 3,7 L 5,7 L 5,1 L 7,1 L 7,0 L 1,0" />
          <path id="U" d="M 1,6 L 2,6 L 2,7 L 6,7 L 6,6 L 7,6 L 7,0 L 5,0 L 5,6 L 3,6 L 3,0 L 1,0 L 1,6" />
          <path id="V" d="M 2,5 L 1,5 L 1,0 L 3,0 L 3,5 L 5,5 L 5,0 L 7,0 L 7,5 L 6,5 L 6,6 L 5,6 L 5,7 L 3,7 L 3,6 L 2,6 L 2,5" />
          <path id="W" d="M 3,7 L 3,6 L 4,6 L 4,5 L 5,5 L 5,6 L 6,6 L 6,7 L 8,7 L 8,0 L 6,0 L 6,4 L 5,4 L 5,3 L 4,3 L 4,4 L 3,4 L 3,0 L 1,0 L 1,7 L 3,7" />
          <path id="X" d="M 2,2 L 1,2 L 1,0 L 3,0 L 3,2 L 5,2 L 5,0 L 7,0 L 7,2 L 6,2 L 6,3 L 5,3 L 5,4 L 6,4 L 6,5 L 7,5 L 7,7 L 5,7 L 5,5 L 3,5 L 3,7 L 1,7 L 1,5 L 2,5 L 2,4 L 3,4 L 3,3 L 2,3 L 2,2" />
          <path id="Y" d="M 1,3 L 2,3 L 2,4 L 3,4 L 3,7 L 5,7 L 5,4 L 6,4 L 6,3 L 7,3 L 7,0 L 5,0 L 5,3 L 3,3 L 3,0 L 1,0 L 1,3" />
          <path id="Z" d="M 1,1 L 1,0 L 7,0 L 7,2 L 6,2 L 6,3 L 5,3 L 5,4 L 4,4 L 4,5 L 3,5 L 3,6 L 7,6 L 7,7 L 1,7 L 1,5 L 2,5 L 2,4 L 3,4 L 3,3 L 4,3 L 4,2 L 5,2 L 5,1 L 1,1" />
          <path id="linecross" d="M 3,0 L 3,3 L 0,3 L 0,5 L 3,5 L 3,8 L 5,8 L 5,5 L 8,5 L 8,4 L 8,3 L 5,3 L 5,0 L 3,0" />
          <path id="checkerlefthalf" d="M 2,4 L 4,4 L 4,2 L 2,2 L 2,4 M 2,2 L 2,0 L 0,0 L 0,2 L 2,2 M 0,6 L 2,6 L 2,4 L 0,4 L 0,5 L 0,6 M 2,6 L 2,8 L 4,8 L 4,6 L 2,6" />
          <path id="vert" d="M 5,8 L 3,8 L 3,0 L 5,0 L 5,8" />
          <path id="checkerfull" d="M 6,6 L 8,6 L 8,5 L 8,4 L 6,4 L 6,6 M 6,2 L 8,2 L 8,1 L 8,0 L 6,0 L 6,2 M 2,0 L 2,2 L 4,2 L 4,0 L 2,0 M 6,4 L 6,2 L 4,2 L 4,4 L 6,4 M 2,4 L 2,6 L 4,6 L 4,4 L 2,4 M 4,6 L 4,8 L 6,8 L 6,6 L 4,6 M 2,6 L 0,6 L 0,8 L 2,8 L 2,6 M 2,2 L 0,2 L 0,4 L 2,4 L 2,2" />
          <path
            id="stripesneg"
            d="M 0,7 L 1,7 L 1,8 L 3,8 L 3,7 L 2,7 L 2,6 L 1,6 L 1,5 L 0,5 L 0,6 L 0,7 M 0,3 L 1,3 L 1,4 L 2,4 L 2,5 L 3,5 L 3,6 L 4,6 L 4,7 L 5,7 L 5,8 L 7,8 L 7,7 L 6,7 L 6,6 L 5,6 L 5,5 L 4,5 L 4,4 L 3,4 L 3,3 L 2,3 L 2,2 L 1,2 L 1,1 L 0,1 L 0,2 L 0,3 M 2,0 L 2,1 L 3,1 L 3,2 L 4,2 L 4,3 L 5,3 L 5,4 L 6,4 L 6,5 L 7,5 L 7,6 L 8,6 L 8,4 L 7,4 L 7,3 L 6,3 L 6,2 L 5,2 L 5,1 L 4,1 L 4,0 L 2,0 M 6,0 L 6,1 L 7,1 L 7,2 L 8,2 L 8,0 L 6,0"
          />
          <path id="unnamed97" d="M 0,0 L 8,0 L 8,8 L 0,8 L 0,0" />
          <path id="halfblockleft" d="M 0,8 L 0,0 L 4,0 L 4,8 L 3,8 L 0,8" />
          <path id="halfblockbottom" d="M 8,8 L 8,4 L 0,4 L 0,8 L 8,8" />
          <path id="linetopthin" d="M 8,1 L 0,1 L 0,0 L 8,0 L 8,1" />
          <path id="lowbar" d="M 0,8 L 2,8 L 8,8 L 8,7 L 0,7 L 0,8" />
          <path id="lineleft" d="M 2,8 L 2,0 L 0,0 L 0,8 L 2,8" />
          <path id="checkeralt" d="M 6,8 L 6,6 L 6,4 L 8,4 L 8,2 L 6,2 L 6,0 L 4,0 L 4,2 L 2,2 L 2,0 L 0,0 L 0,2 L 2,2 L 2,4 L 0,4 L 0,6 L 2,6 L 2,8 L 4,8 L 4,6 L 8,6 L 8,8 L 6,8 M 4,4 L 2,4 L 2,6 L 4,6 L 4,4 L 6,4 L 6,2 L 4,2 L 4,4" />
          <path id="linerightbar" d="M 8,0 L 6,0 L 6,7.9 L 8,7.9 L 8,0" />
          <path id="checkerbottom" d="M 8,6 L 8,7.9 L 6,7.9 L 6,4 L 4,4 L 4,7.9 L 2,7.9 L 2,4 L 0,4 L 0,6 L 8,6" />
          <path
            id="stripespos"
            d="M 4,0 L 4,1 L 3,1 L 3,2 L 2,2 L 2,3 L 1,3 L 1,4 L 0,4 L 0,6 L 1,6 L 1,5 L 2,5 L 2,4 L 3,4 L 3,3 L 4,3 L 4,2 L 5,2 L 5,1 L 6,1 L 6,0 L 4,0 M 0,0 L 0,2 L 1,2 L 1,1 L 2,1 L 2,0 L 0,0 M 7,1 L 7,2 L 6,2 L 6,3 L 5,3 L 5,4 L 4,4 L 4,5 L 3,5 L 3,6 L 2,6 L 2,7 L 1,7 L 1,8 L 3,8 L 3,7 L 4,7 L 4,6 L 5,6 L 5,5 L 6,5 L 6,4 L 7,4 L 7,3 L 8,3 L 8,1 L 7,1 M 7,5 L 7,6 L 6,6 L 6,7 L 5,7 L 5,8 L 7,8 L 7,7 L 8,7 L 8,5 L 7,5"
          />
          <path id="linebarright" d="M 6,0 L 6,8 L 7,8 L 8,8 L 8,0 L 6,0" />
          <path id="linet" d="M 3,8 L 5,8 L 5,5 L 8,5 L 8,3 L 5,3 L 5,0 L 3,0 L 3,8" />
          <path id="quarterbottomright" d="M 8,8 L 8,4 L 4,4 L 4,8 L 8,8" />
          <path id="linetopright" d="M 3,5 L 3,0 L 5,0 L 5,3 L 8,3 L 8,5 L 3,5" />
          <path id="linebottomleft" d="M 5,3 L 5,8 L 3,8 L 3,5 L 0,5 L 0,3 L 5,3" />
          <path id="linebottom" d="M 0,8 L 8,8 L 8,6 L 0,6 L 0,8" />
          <path id="linebottomright" d="M 3,8 L 5,8 L 5,5 L 8,5 L 8,3 L 3,3 L 3,8" />
          <path id="linetopt" d="M 4,0 L 3,0 L 3,3 L 0,3 L 0,5 L 8,5 L 8,3 L 5,3 L 5,0 L 4,0" />
          <path id="linebottomt" d="M 3,8 L 5,8 L 5,5 L 8,5 L 8,3 L 0,3 L 0,5 L 3,5 L 3,8" />
          <path id="lineleftt" d="M 3,0 L 3,3 L 0,3 L 0,5 L 3,5 L 3,8 L 5,8 L 5,0 L 3,0" />
          <path id="linethinleft" d="M 0,0 L 0,8 L 2,8 L 2,0 L 0,0" />
          <path id="linebarleft" d="M 0,0 L 0,8 L 3,8 L 3,0 L 0,0" />
          <path id="blockright" d="M 5,0 L 5,8 L 8,8 L 8,0 L 5,0" />
          <path id="unnamed119" d="M 0,0 L 8,0 L 8,8 L 0,8 L 0,0" />
          <path id="linetopbar" d="M 8,3 L 0,3 L 0,0 L 8,0 L 8,3" />
          <path id="blockbottom" d="M 0,8 L 8,8 L 8,5 L 0,5 L 0,8" />
          <path id="checkmark" d="M 8,0 L 7,0 L 7,1 L 6,1 L 6,2 L 5,2 L 5,3 L 4,3 L 4,4 L 3,4 L 3,3 L 1,3 L 1,7 L 3,7 L 3,6 L 4,6 L 4,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,2 L 8,2 L 8,0" />
          <path id="quarterbottomlleft" d="M 4,8 L 0,8 L 0,4 L 4,4 L 4,8" />
          <path id="quartertopright" d="M 4,4 L 8,4 L 8,0 L 4,0" />
          <path id="linetopleft" d="M 0,5 L 5,5 L 5,0 L 3,0 L 3,3 L 0,3 L 0,4 L 0,5" />
          <path id="quartertopleft" d="M 4,0 L 4,4 L 0,4 L 0,0 L 4,0" />
          <path id="checkerlarge" d="M 0,0 L 0,4 L 4,4 L 4,0 L 0,0 M 4,4 L 4,8 L 8,8 L 8,4 L 4,4" />
        </defs>
      </svg>
    </>
  );
};

export default Template;
