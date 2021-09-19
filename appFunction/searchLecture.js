import ReadData from './readData.js';

function importJsonFiles(lectureFileName) {
  lectureFileName = lectureFileName.trim()
  var data;
  try {
    if (lectureFileName == '総合理工') {
      data = require('../assets/firstSemisterLecs/総合理工.json')
    }
    console.log("data：" + data + '\n');
    console.log(lectureFileName + typeof(lectureFileName) + '\n' + "詳細" + lectureFileName.split('') + '\n')
    return data;
  } catch (error) {
    console.log(error);
  }
}

const searchLecture = async (inputedKeyWord) => {
  try {
    let readFacultyInfo = await ReadData('facultyName');

    // readFacultyInfoを文字列 => 配列変更
    readFacultyInfo = readFacultyInfo.split(',');
    let readFileName = [];
    readFacultyInfo.forEach(fileInfo => {
      readFileName.push(fileInfo.replace(/'/g, ''));
    });

    //  readFileName[0]は学部名
    readFileName.shift();
    let lectureData = [];
    readFileName.forEach(fileName => {
      let lectureFile = importJsonFiles(fileName);
      console.log('lectureFile：'+lectureFile + '\n');
      lectureFile = lectureFile.filter(function (item) {
        return item.科目.match(inputedKeyWord) || item.担当.match(inputedKeyWord);
      })
      for (let lectureNumber = 0; lectureNumber < lectureFile.length; lectureNumber++) {
        lectureData.push(lectureFile[lectureNumber]);
      }
    });
    return lectureData;
  } catch (error) {
    console.log('ファイル名：seachLecture.js\n' + 'エラー：' + error + '\n');
  }
}

export default searchLecture;
