using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2 {


    /**
     
         Now try a repeating-key XOR cipher. E.g. it should take a string "hello world" and, given the key is "key",
        xor the first letter "h" with "k", then xor "e" with "e", then "l" with "y", and then xor next char "l" with "k" again, 
        then "o" with "e" and so on. You may use index of coincidence,
        Hamming distance, Kasiski examination, statistical tests or whatever method you feel would show the best result.
         */
    class Probalility {
        public string value;
        public double matches;
        public int delay;
    }
    class Program {
        public static string taks2 =
            "1b420538554c2d100f2354096c44036c511838510f27101f235d096c43052140" +
            "0029101f39521f385918394405235e4c2f591c24551e62103823101e2954192" +
            "f554c3858096c530321400029480538494c23564c3858053f100322554c3b55" +
            "4c3b59002010193f554c235e003510193c40093e530d3f554c20551838551e3" +
            "f1c4c3f5f4c3858096c5b0935431c2d53096c591f6c5f0220494c7e064d6c64" +
            "036c570938101824591f6c5f0229101e25570438100d39440321511825530d2" +
            "05c156c490339101b255c006c401e23520d2e5c156c5e0929544c385f4c3943" +
            "096c430321554c3f5f1e3810032a100b295e0938590f6c51002b5f1e2544042" +
            "11c4c3f5901395c0d3855086c510222550d2059022b10033e100b3e51082555" +
            "0238100829430f295e1862103f29420523451f2049406c471e2544096c59186" +
            "c42052b58186c5e033b1c4c355f196c4705205c4c2255092810053810182310" +
            "082953053c58093e101824554c22551438100322554c2d434c3b5500201e4c0" +
            "e550d3e1005221001255e0860101824551e29171f6c5e036c431c2d53093f1e";

        public static string ConvertHex(String hexString) {
            try {
                string ascii = string.Empty;

                for (int i = 0; i < hexString.Length; i += 2) {
                    String hs = string.Empty;

                    hs = hexString.Substring(i, 2);
                    uint decval = System.Convert.ToUInt32(hs, 16);
                    char character = System.Convert.ToChar(decval);
                    ascii += character;

                }

                return ascii;
            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }

            return string.Empty;
        }

        private static string xor(string text, string key) {
            var result = new StringBuilder();
            for (int c = 0; c < text.Length; c++)
                result.Append((char)((uint)text[c] ^ (uint)key[c % key.Length]));
            return result.ToString();
        }

        private static string getEach(string text, int delay, int start = 0) {
            var result = new StringBuilder();
            for (int c = start; c < text.Length; c += delay)
                result.Append(text[c]);
            return result.ToString();
        }

        private static double getMatches(string text) {

            char[] letters = new char[] {
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                ' ', '-', '.', ','
            };
            var result = new StringBuilder();
            double i = 0;
            for (int c = 0; c < text.Length; c++)
                if (letters.Contains(text[c])) i++;
            return i;
        }

        static void Main(string[] args) {


            //
            //  var a = 2786921250;
            //  int MyInt = (int)(a & 0xFFFFFFFF);
            //   int b = Convert.ToInt32(a);
            Console.WriteLine();
            Console.WriteLine(DateTimeOffset.UtcNow.ToUnixTimeSeconds());

            Console.ReadKey();

            string task = ConvertHex(Program.taks2);
            Console.Write("Text lenght: ");
            Console.WriteLine(task.Length);

            string key = "";
            char[] ans = task.ToCharArray();

            for (int z = 0; z < 9; z++) {

                Probalility[] arra = new Probalility[255];

                for (int i = 0; i < 255; i++) {
                    string xr = xor(task, i.ToString());
                    Probalility letter = new Probalility() { value = "", matches = 0, delay = 0 };
                    /////  for (int j = 1; j < 50; j++) {
                    Probalility p = new Probalility();
                    p.delay = 9;
                    p.value = getEach(xr, 9, z);
                    p.matches = getMatches(p.value) / p.value.Length;
                    if (p.matches >= letter.matches) {
                        letter = p;
                    }
                    // }
                    arra[i] = letter;
                    /// Console.WriteLine();
                    /// Console.WriteLine();
                    /// Array.Sort(arra, delegate (Probalility x, Probalility y) { return x.matches.CompareTo(y.matches); });
                }
                Probalility uni = new Probalility() { value = "", matches = 0, delay = 0 };
                for (int i = 0; i < 255; i++) {
                    if (arra[i].matches > uni.matches) {
                        if (arra[i].matches == 1 && uni.matches == 1) {
                            if (arra[i].delay < uni.delay) {
                                uni = arra[i];
                            }
                        }
                        else
                            uni = arra[i];
                    }
                }
                for (int kk = z; kk < uni.value.Length; kk++) {
                    ans[kk] = uni.value[kk * uni.delay];
                }
                key += Encoding.ASCII.GetString(new byte[] { Convert.ToByte( z )}); 

            }


            Console.ReadKey();
        }
    }
}
