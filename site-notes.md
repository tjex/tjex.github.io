

2023-06-01:
    /node_modules/mdast-util-to-hast/lib/footer.js line: 53
    this is where the footnote arrow gets set. 
    Changed to this: `children: [{type: 'text', value: '⤴ '}]`
