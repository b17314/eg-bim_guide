using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGBIMManualBaseFileCreater
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var path = @"C:\Test\Command";

            var mdx = new List<string>();
            var files = Directory.GetFiles(path, "*.md");
            foreach(var file in files)
            {
                var command = Path.GetFileNameWithoutExtension(file);

                var imageCount = Directory.GetFiles($@"{path}\{command}").Length;

                var newFilePath = Path.ChangeExtension(file, ".mdx");
                newFilePath = $@"{path}\_\{command.First()}\{Path.GetFileName(newFilePath)}";
                if(!Directory.Exists(Path.GetDirectoryName(newFilePath)))
                    Directory.CreateDirectory(Path.GetDirectoryName(newFilePath));
                File.Move(file, newFilePath.ToLower());

                var newContent = new StringBuilder();
                newContent.AppendLine("---");
                newContent.AppendLine($"title: {command}");
                newContent.AppendLine("---");
                newContent.AppendLine();
                newContent.AppendLine("import { Icon } from '@astrojs/starlight/components';");
                newContent.AppendLine("import { Image } from 'astro:assets';");
                newContent.AppendLine();
                for (int i = 1; i <= imageCount; i++)
                {
                    newContent.AppendLine($"[image{i}]: ../../../../../assets/images/commands/{command.ToLower()}/image{i}.png");
                };
                newContent.AppendLine();
                newContent.AppendLine();

                var lines = File.ReadAllLines(newFilePath);
                foreach(var line in lines)
                {
                    if (line.StartsWith("[image"))
                        continue;

                    if (line.Contains("\t"))
                        newContent.AppendLine(line.Replace("\t", "&nbsp;"));
                    else
                        newContent.AppendLine(line);
                }
                    
                
                File.WriteAllText(newFilePath, newContent.ToString(), Encoding.UTF8);
            }
        }
    }
}
