using System;

class StringToUrl
{
  static char[] replaceSpaces(char[] str)
  {
    int spaceCount = 0;
    for (i = 0; i < str.Length; i++)
      if (str[i] == ' ')
        spaceCount++;
    while (str[i - 1] == ' ')
    {
      spaceCount--;
      i--;
    }

    int newLength = i + spaceCount * 2;
    return str;
  }
}