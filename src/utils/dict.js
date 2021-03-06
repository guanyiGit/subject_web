/**
 * 题目分类
 * @type {*[]}
 */
export const subjectModeList = [
    {seq: -1, desc: '全部'},
    {seq: 0, desc: '问卷调查'},
    {seq: 1, desc: '在线考试'},
    {seq: 2, desc: '知识竞赛'}
]
/**
 *题目难度
 * @type {*[]}
 */
export const subjectDifficultyList = [
    {seq: -1, desc: '全部'},
    {seq: 0, desc: '简单'},
    {seq: 1, desc: '一般'},
    {seq: 2, desc: '困难'}
]

/**
 *题目状态
 * @type {*[]}
 */
export const subjectStatusList = [
    {seq: -1, desc: '全部'},
    {seq: 0, desc: '未使用'},
    {seq: 1, desc: '已使用'},
    {seq: 2, desc: '已删除'}
]

/**
 *题目状态
 * @type {*[]}
 */
export const sunjectTypeList = [
    // {seq: -1, desc: '全部'},
    {seq: 0, desc: '单选'},
    {seq: 1, desc: '多选'},
    {seq: 2, desc: '判断'},
    {seq: 3, desc: '简答'}

]

/**
 *及格状态
 * @type {*[]}
 */
export const passList = [
    {seq: -1, desc: '全部'},
    {seq: 0, desc: '及格'},
    {seq: 1, desc: '不及格'}
]

/**
 *考试结果
 * @type {*[]}
 */
export const resultList = [
    {seq: -1, desc: '全部'},
    {seq: 0, desc: '正确'},
    {seq: 1, desc: '错误'}
]

/**
 *数字转字母
 * @type {*[]}
 */
export const numToChar = function(num, append){
    if(!num ) return num;
    append = append || 64;
    return String.fromCharCode(parseInt(num) + append);
}

/**
 *字母转数字
 * @type {*[]}
 */
export const charToNum = function(char, append){
    if(!char) return char;
    if(char instanceof 'string'){
        let _s = char;
        _s = _s.replace(/(^\s*)|(\s*$)/g, "");
        var _r = "";
        for(var i=0;i<_s.length;i++){
            _r += i==0 ? _s.charCodeAt(i) : "|" + _s.charCodeAt(i);
        }
        char = _r;
    }
    append = append || 64;
    return (num + append).charCodeAt() - append;
}